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
}

module.exports = UserController