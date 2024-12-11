const sqlite = require("sqlite3")
const path = require("path")

const db = new sqlite.Database(path.join(__dirname, "database.db"))

async function execute(db, sql, params = []) {
    if (params && params.length > 0) {
        return new Promise((resolve, reject) => {
            db.run(sql, params, err => {
                if (err) reject(err)
                resolve()
            })
        })
    }
    return new Promise((resolve, reject) => {
        db.exec(sql, (err) => {
            if (err) reject(err)
            resolve()
        })
    })
}

async function fetchAll(db, sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}

async function fetchOne(db, sql, params) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) reject(err)
            resolve(row)
        })
    })
}

module.exports = { db, execute, fetchAll, fetchOne }