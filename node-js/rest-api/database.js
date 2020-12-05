const sqlite3 = require("sqlite3")
const dbSource = "database.db"

// iniciar conexão
const dbConnection = new sqlite3.Database(dbSource, (err) => {
   if (err) {
      console.log("Não foi possível conectar à base de dados:", err.message)
      throw err
   } else {
      console.log("Conectado à base de dados com sucesso!")
   }
})

module.exports = dbConnection