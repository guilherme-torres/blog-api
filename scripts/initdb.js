const fs = require("fs")
const sqlite = require("sqlite3")
const path = require("path")

const db = new sqlite.Database(path.join(__dirname, "..", "src", "database.db"), err => {
    if (err) {
        return console.log(err.message)
    }
    console.log("Successfully connected to the database.")
})

const sql = fs.readFileSync(path.join(__dirname, "database.sql")).toString()
const statements = sql.split(";")

db.serialize(() => {
    statements.forEach(statement => {
        if (statement) {
            statement += ";"
            db.run(statement, err => {
                if (err) throw err
            })
        }
    })
})

db.close(err => {
    if (err) {
        return console.log(err.message)
    }
    console.log("Closed the database connection.")
})