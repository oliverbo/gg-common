export default class ApiError extends Error {
    constructor(message: string) {
        super();
        this.name = "ApiError";
        this.message = message;
    }
}
