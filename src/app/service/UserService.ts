import { Context } from 'koa'
import library from '../db/entity/library'

class UserService {
    constructor() { }

    async addUser(ctx: Context) {

        let firstName: string = ctx.request.body.lastName
        let lastName: string = ctx.request.body.firstName
        let email: string = ctx.request.body.email
        
        await library.User.create({
            firstName: firstName,
            lastName: lastName,
            email: email
        })
    }
}


let userService: UserService = new UserService()
export default userService;