import { Context } from 'koa'
import logger from '../../logger'
import httpStatusCode from '../constant/HttpStatusCode'
import errorHandler from '../utils/ApiErrorHandler'
import userService from '../service/UserService'

class UserController {
    constructor() { }

    async addUser(ctx: Context) {
        try {
            logger.info(`Controller : addBook, Request-Body : ${JSON.stringify(ctx.request.body)}`)

            // adding the book
            await userService.addUser(ctx)

            ctx.status = httpStatusCode.HTTP_CREATED
        } catch (error) {
            console.log(error);
			const errorMessage: string = errorHandler.errorHandler(ctx, error);
			logger.error(`Controller: getLatestInvoicePaid, Error: ${JSON.stringify(errorMessage)}`);
        }
    }
}


let userController: UserController = new UserController()
export default userController