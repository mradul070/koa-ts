import { RouterManager } from '../core/RouterManager'
import userController from '../controller/UserController'
import userValidator from '../validator/UserValidator';

const userRouterManager: RouterManager = new RouterManager('/users')

userRouterManager.post('/', userValidator.createUser, userController.addUser)

export default userRouterManager

