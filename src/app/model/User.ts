export class User {
    id: number
    firstName: string
    lastName: string
    email: string

    constructor() {
        this.id = 0
        this.firstName = null
        this.lastName = null
        this.email = null
    }

    setId(id: number) {
        this.id = id
    }

    setfirstName(firstName: string) {
        this.firstName = firstName
    }

    setLastName(lastName: string) {
        this.lastName = lastName
    }

    setEmail(email: string) {
        this.email = email
    }
}