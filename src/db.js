const sqlite = require("sqlite3")
const path = require("path")

const db = new sqlite.Database(path.join(__dirname, "database.db"))

module.exports = db