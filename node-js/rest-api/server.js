const express = require("express")
const app = express()
const port = 4000
const db = require("./database.js")
const md5 = require("md5")
const bodyParser = require("body-parser")


// iniciar servidor
app.listen(port, () => {
   console.log("Servidor aberto na porta", port)
})


// root padrão
app.get("/", (req, res, next) => {
   res.json({ "message": "Ok" })
})


// obter todos os utilizadores
app.get("/api/users", (req, res, next) => {
   var sql = "SELECT * FROM Users"
   var params = []

   db.all(sql, params, (err, rows) => {
      if (err) {
         res.status(400).json({ "error": err.message })
         return
      }
      res.json({
         "message": "Utilizadores obtidos com sucesso!",
         "data": rows
      })
   })
})


// obter um utilizador
app.get("/api/users/:id", (req, res, next) => {
   var sql = "SELECT * FROM Users WHERE id = ?"
   var params = [req.params.id]

   db.get(sql, params, (err, row) => {
      if (err) {
         res.status(400).json({ "error": err.message })
         return
      }
      res.json({
         "message": "Utilizador obtido com sucesso!",
         "data": row
      })
   })
})


// necessário para pré-processar o corpo das solicitações POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// inserir utilizador
app.post("/api/users/", (req, res, next) => {
   // erros ao inserir utilizador 
   var errors = []
   if (!req.body.username) {
      errors.push("O nome de utilizador não foi inserida.")
   }
   if (!req.body.password) {
      errors.push("A senha não foi inserida.")
   }
   if (!req.body.name) {
      errors.push("O nome não foi inserida.")
   }
   if (!req.body.email) {
      errors.push("O email nãi foi inserido.")
   }
   if (errors.length) {
      res.status(400).json({ "error": errors.join(",") })
      return
   }

   // obter dados do envio
   var data = {
      username: req.body.username,
      password: md5(req.body.password),
      name: req.body.name,
      email: req.body.email
   }

   // inserir na base de dados
   var sql = "INSERT INTO Users (username, password, name, email) VALUES (?, ?, ?, ?)"
   var params = [data.username, data.password, data.name, data.email]
   db.run(sql, params, function(err, result) {
      if (err) {
         res.status(400).json({ "error": err.message })
         return
      }
      res.json({
         "message": "Utilizador inserido com sucesso!",
         "data": data,
         "id": this.lastID
      })
   })
})


// atualizar utilizador
app.patch("/api/users/:id", (req, res, next) => {
   var data = {
      username: req.body.username,
      password: req.body.password ? md5(req.body.password) : null,
      name: req.body.name,
      email: req.body.email,
      id: req.params.id
   }

   var sql = "UPDATE Users SET username = ?, password = ?, name = ?, email = ? WHERE id = ?"
   var params = [data.username, data.password, data.name, data.email, data.id]

   db.run(sql, params, function(err, result) {
      if (err) {
         res.status(400).json({ "error": res.message })
         return
      }
      res.json({
         "message": "Utilizador atualizado com sucesso!",
         "data": data,
         "changes": this.changes
      })
   })
})


// apagar utilizador
app.delete("/api/users/:id", (req, res, next) => {
   var sql = "DELETE FROM Users WHERE id = ?"
   var params = [req.params.id]

   db.run(sql, params, function(err, result) {
      if (err) {
         res.status(400).json({ "error": res.message })
         return
      }
      res.json({
         "message": "Utilizador apagado com sucesso!",
         "changes": this.changes
      })
   })
})


// resposta padrão para qualquer outra solicitação
app.use(function(req, res) {
   res.status(404)
})