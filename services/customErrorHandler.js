class CustomErrorHandler {
    constructor (message) {
        this.message = message
    }
    static unAuthorize(message = "Unauthorize user") {
        return new CustomErrorHandler(message);
    }
}

export default CustomErrorHandler