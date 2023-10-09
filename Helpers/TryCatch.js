export const TryCatch = (controller) => async(req,res,next)=>{
    try {
        await controller(req,res)
    } catch (error) {
        return next(error)
    }
}  