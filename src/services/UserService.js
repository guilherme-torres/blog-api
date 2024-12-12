const bcrypt = require("bcrypt")

class UserService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository
        this.authService = authService
    }

    async create(user) {
        const { username, password } = user
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        if (await this.userRepository.findByUsername(username)) throw new Error("user already exists")
        await this.userRepository.create([username, hashedPassword])
    }

    async login(user) {
        const { username, password } = user
        console.log({ username, password })
        try {
            const authenticatedUser = await this.authService.authenticateUser({ username, password })
            console.log(authenticatedUser)
            return this.authService.generateToken(authenticatedUser)
        } catch (err) {
            throw new Error(err.message)
        }
    }
}

module.exports = UserService