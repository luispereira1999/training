const express = require("express")
const app = express()
const port = 4000
const bodyParser = require("body-parser")

// iniciar servidor
app.listen(port, () => {
   console.log("Servidor aberto na porta", port)
})

// rota padrão
app.get("/", (req, res, next) => {
   res.json({ "message": "Ok" })
})

// necessário para pré-processar o corpo das solicitações POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// rotas da api
const userRoute = require("./routes/user-route")
app.use("/api/users", userRoute)

module.exports = app