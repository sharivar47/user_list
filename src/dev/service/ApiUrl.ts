export default class ApiUrl {
    static login() {
        return '/api/login'
    }
    static getUsers() {
        return '/api/users'
    }
    static getUser(id: string) {
        return `/api/users/${id}`
    }
}