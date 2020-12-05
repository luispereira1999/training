const db = require("../database.js")
const md5 = require("md5")
var User = require("../models/user")

module.exports = {
   // obter todos os utilizadores
   getAll: async(req, res, next) => {
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
   },


   // obter um utilizador
   getById: async(req, res, next) => {
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
   },


   // inserir utilizador
   insert: async(req, res, next) => {
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

      // obter dados da resposta
      var data = new User(null, req.body.username, md5(req.body.password), req.body.name, req.body.email);

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
   },


   // atualizar utilizador
   update: async(req, res, next) => {
      var data = new User(req.params.id, req.body.username, md5(req.body.password), req.body.name, req.body.email);

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
   },


   // apagar utilizador
   delete: async(req, res, next) => {
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
   }
}