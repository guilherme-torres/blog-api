const { db, execute, fetchAll, fetchOne } = require("../db")

class UserRepository {
    async create(params) {
        try {
            await execute(db, "INSERT INTO users (username, password_hash) VALUES (?, ?)", params)
        } catch (err) {
            console.log(err)
        }
    }

    async listAll() {
        try {
            return await fetchAll(db, "SELECT * FROM users")
        } catch (err) {
            console.log(err)
        }
    }

    async findById(id) {
        try {
            return await fetchOne(db, "SELECT * FROM users WHERE id = ?", [id])
        } catch (err) {
            console.log(err)
        }
    }

    async findByUsername(username) {
        try {
            return await fetchOne(db, "SELECT * FROM users WHERE username = ?", [username])
        } catch (err) {
            console.log(err)
        }
    }

    async deleteById(id) {
        try {
            await execute(db, "DELETE FROM users WHERE id = ?", [id])
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = UserRepository