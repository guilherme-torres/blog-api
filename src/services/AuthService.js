const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async authenticateUser({ username, password }) {
        const user = await this.userRepository.findByUsername(username)
        console.log(user)
        if (!user) throw new Error("User not found.")
        if (!(await bcrypt.compare(password, user.password))) throw new Error("Incorrect password.")
        return user
    }

    generateToken(user) {
        console.log(user)
        return jwt.sign(
            { sub: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" })
    }

    verifyToken(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) throw new Error("Invalid or expired token.")
            return decoded
        })
    }
}

module.exports = AuthService