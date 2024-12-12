const { db, execute, fetchAll, fetchOne } = require("../db")

class ArticleRepository {
    async create(params) {
        try {
            await execute(db, "INSERT INTO articles (title, content, user_id) VALUES (?, ?. ?)", params)
        } catch (err) {
            console.log(err)
        }
    }

    async listAll() {
        try {
            return await fetchAll(db, "SELECT * FROM articles")
        } catch (err) {
            console.log(err)
        }
    }

    async findById(id) {
        try {
            return await fetchOne(db, "SELECT * FROM articles WHERE id = ?", [id])
        } catch (err) {
            console.log(err)
        }
    }

    async deleteById(id) {
        try {
            await execute(db, "DELETE FROM articles WHERE id = ?", [id])
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = ArticleRepository