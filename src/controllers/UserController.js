class UserController {
    constructor(userService) {
        this.userService = userService
    }

    async create(request, response) {
        const user = request.body
        try {
            await this.userService.create(user)
            return response.sendStatus(200)
        } catch (err) {
            return response.status(400).json({
                error: err.message
            })
        }
    }

    async login(request, response) {
        const user = request.body
        try {
            const token = await this.userService.login(user)
            return response.status(200).json({ token })
        } catch (err) {
            return response.status(401).json({
                error: err.message
            })
        }
    }
}

module.exports = UserController