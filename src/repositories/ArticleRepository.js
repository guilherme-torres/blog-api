const db = require("../db")

class ArticleRepository {
    create(params) {
        db.run("INSERT INTO articles (title, content, user_id) VALUES (?, ?, ?)", params, err => {
            if (err) throw err
        })
    }

    listAll() {
        db.all("SELECT * FROM articles", (err, rows) => {
            if (err) throw err
            else return rows
        })
    }

    findById(id) {
        db.get("SELECT * FROM articles WHERE id = ?", [id], (err, rows) => {
            if (err) throw err
            else return rows
        })
    }

    deleteById(id) {
        db.get("DELETE FROM articles WHERE id = ?", [id], (err, rows) => {
            if (err) throw err
            else return rows
        })
    }
}

module.exports = ArticleRepository