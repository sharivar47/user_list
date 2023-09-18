export default class Api {
   static baseUrl = 'https://reqres.in'
    static async get(url: string) {
     return this.send(url, 'get', null)
    }
    static async post(url: string, data: any) {
     return this.send(url, 'post', data)
    }
    static async send(url: string, method: string ,data: any) {
        const init:RequestInit = {};
        init.method = method;
        if (method == 'post') {
            init.body = JSON.stringify(data);
            init.headers = {'Content-Type': 'application/json'}
        }
        url = this.baseUrl + url
        try {
            const response = await fetch(url, init)
            return new Response({ok: response.ok, status: response.status, data: await response.json()})
        } catch (e) {
          return new Response({ok: false, status: 400, data: null})
        }
    }
}
class Response {
    constructor(r: any) {
        this.ok = r.ok;
        this.status = r.status;
        this.data = r.data
    }

    ok: boolean;
    status: number;
    data: any;
    get success() {
       return  this.status == 200;
    }
}
