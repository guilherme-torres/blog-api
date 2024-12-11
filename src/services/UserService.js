const bcrypt = require("bcrypt")

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async create(user) {
        const { username, password } = user
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        if (await this.userRepository.findByUsername(username)) throw new Error("user already exists")
        await this.userRepository.create([username, hashedPassword])
    }
}

module.exports = UserService