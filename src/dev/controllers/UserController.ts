import Api from "../service/Api";
import ApiUrl from "../service/ApiUrl";
import ApiResult from "../models/ApiResult";

export default class UserController {
    static async getUsers() {
        const apiRes = new ApiResult()
        const response = await Api.get(ApiUrl.getUsers())
        if (response.success) {
            apiRes.setData(response.data.data)
        } else {
            apiRes.setData([])
            apiRes.setError('error')
        }
       return apiRes
    }
    static async getUser(id: string) {
        const apiRes = new ApiResult()
        const response = await Api.get(ApiUrl.getUser(id))
        if (response.success) {
            apiRes.setData(response.data.data)
        } else {
            apiRes.setData([])
            apiRes.setError('error')
        }
        return apiRes
    }
    static async login(parameters: any) {
        const apiRes = new ApiResult()
        const response = await Api.post(ApiUrl.login(), parameters)
        if (response.success) {
            apiRes.setData(response.data)
        } else {
            apiRes.setData([])
            apiRes.setError('error')
        }
        return apiRes
    }
}