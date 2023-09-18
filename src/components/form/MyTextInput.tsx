import {FormikProps} from "formik";
import React from "react";
interface CustomFormikProps {
    className? : string;
    name: string;
    formik: FormikProps<any>;
    placeholder?: string;
    readonly ?: boolean
}

const MyTextInput = ({name, placeholder, className, formik, readonly = false}: CustomFormikProps) => {
    const {setFieldValue, values} = formik;
    const value: string = values[name];
    return (<input readOnly={readonly} name={name} type="text" autoComplete="off" placeholder={placeholder} className="form-control" value={value} onChange={(event) => {
        setFieldValue(name, event.currentTarget.value);
    }} />)
}
export default MyTextInput
