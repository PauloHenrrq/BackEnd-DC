import express from 'express' // IMPORTAÇÃO DA BIBLIOTECA EXPRESS   

const app = express() // DECLARAÇÃO DO EXPRESS PARA UTILIZAR COMO APP
const port = 3000 // DECLARAÇÃO DA PORTA COMO 3000

app.get("/", (request, response) => response.json("Leo"))

app.listen(port, (error) => {
  console.log('App is running') // EXECUÇÃO DO CONTEÚDO UTILIZANDO LISTEN E DECLARAÇÃO DA PORTA, POR FIM CHAMANDO UMA CALLBACK
})
