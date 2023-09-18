import {Formik, FormikProps} from "formik";
import * as Yup from "yup"
import MyLabel from "./form/MyLabel";
import MyTextInput from "./form/MyTextInput";
import UserController from "../dev/controllers/UserController";
import {setAuthToken} from "../dev/redux/AuthSlice";
import {useDispatch} from "react-redux";

const Login = () => {
    const validationObj = Yup.object().shape({
        email: Yup.string().required('این فیلد ضروری است'),
        password: Yup.string().required('این فیلد ضروری است')
    })
    const dispatch = useDispatch();
    const save = async (model: any, {resetForm}: any) => {
        const result = await UserController.login(model)
        if (result.succeeded) {
            dispatch(setAuthToken(result.data.token))
        } else {
            alert('login info not correct')
        }
    }

    return (<div className="container d-flex justify-content-center">

        <Formik initialValues={{email: "", password: ""}} validationSchema={validationObj} onSubmit={save}>
            {
                (props: FormikProps<any>) => {
                    const {handleSubmit} = props
                    return (
                        <form className="card w-50 mt-5 p-5" onSubmit={(e) => {
                            e.preventDefault()
                        }}>
                            <div>
                                {
                                Object.keys(props.errors).length > 0 ? (<p className="text-danger">please complete field</p>) : ""
                                }
                            </div>
                            <div>
                                <div>
                                    <MyLabel htmlFor="email" label="email" isRequired={true}/>
                                    <MyTextInput name="email" formik={props}/>
                                </div>
                                <div className="mt-3">
                                    <MyLabel htmlFor="password" label="password" isRequired={true}/>
                                    <MyTextInput name="password" formik={props}/>
                                </div>
                                <div className="my-2">
                                    <button className="btn btn-primary" onClick={() => handleSubmit()}>login</button>
                                </div>
                            </div>
                        </form>
                    )
                }
            }
        </Formik>
    </div>)
}
export default Login