export default class ApiResult<TData = any, TError = any> {
    // @ts-ignore
    private _data: TData;
    public get data(): TData {
        return this._data;
    }
    private set data(v: TData) {
        this._data = v;
    }

    private errors: Array<TError> = [];
    get succeeded() {
        return this.errors.length == 0;
    }
    get message() {
        return this.errors[0] || "";
    }
    get messages() {
        return this.errors;
    }

    setError(error: TError) {
        this.errors.push(error);
    }
    setData(data: TData) {
        this.data = data;
    }
}