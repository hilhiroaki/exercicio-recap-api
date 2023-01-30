const express = require('express')
const app = express()

const mongoose = require('mongoose')
const router = require('./routers/')

app.use(express.json())

app.use(router)

mongoose.connect("mongodb+srv://hilhiro:aulas123@cluster0.bd7rdbt.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('✨ Conectado ao banco de dados MongoDB na porta 27017')
  }).catch(error => console.error(error))

app.listen(3031, () => {
  console.log('✨ Servidor rodando na porta 3031')
})