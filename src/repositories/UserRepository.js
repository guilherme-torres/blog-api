class UserRepository {
    create(params) {
        db.run("INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)", params, err => {
            if (err) throw err
        })
    }

    listAll() {
        db.all("SELECT * FROM users", (err, rows) => {
            if (err) throw err
            else return rows
        })
    }

    findById(id) {
        db.get("SELECT * FROM users WHERE id = ?", [id], (err, rows) => {
            if (err) throw err
            else return rows
        })
    }

    deleteById(id) {
        db.get("DELETE FROM users WHERE id = ?", [id], (err, rows) => {
            if (err) throw err
            else return rows
        })
    }
}

module.exports = UserRepository