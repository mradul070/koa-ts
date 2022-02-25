import { Context, Next } from 'koa';
import Joi from 'joi';
import errorHandler from '../utils/ApiErrorHandler';
import logger from '../../logger';

class UserValidator {
	constructor() { }
	async createUser(ctx: Context, next: Next): Promise<any | void> {
		try {
			const bodyValidation = Joi.object({
				firstName: Joi.string().required(),
				lastName: Joi.string().required(),
				email: Joi.string().email().required(),
			});
			const body = ctx.request.body;
			const { error } = bodyValidation.validate(body);
			if (error) {
				const errorMessage: string = errorHandler.errorHandler(ctx, error);
				logger.error(`Validation: createUser, Error: ${errorMessage}`);
				return;
			}
			return next();
		} catch (error) {
			console.log(error);
			const errorMessage: string = errorHandler.errorHandler(ctx, error);
			logger.error(`Validation: createUser, Error: ${errorMessage}`);
			return;
		}
	}
}

const userValidator: UserValidator = new UserValidator();
export default userValidator;
