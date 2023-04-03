import CustomErrorHandler from "../services/customErrorHandler";

const errorHandler = (err,req,res,next) => {
    let message = {
        msg:"Internal server error",
        success:false
    }
    if (err instanceof CustomErrorHandler) {
        message = {
            msg : err.message,
            success:false
        }
    }
    return res.json(message)
}

export default errorHandler;