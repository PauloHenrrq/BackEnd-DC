import express from 'express' // IMPORTAÇÃO DA BIBLIOTECA EXPRESS

const app = express() // DECLARAÇÃO DO EXPRESS PARA UTILIZAR COMO APP
const port = 3000 // DECLARAÇÃO DA PORTA COMO 3000

app.post('/', (request, response) => {
    return response.json('Leo')
  })

app.get('/', (request, response) => {
  return response.json('Leo')
})

app.listen(port, error => {
  console.log('App is running') // EXECUÇÃO DO CONTEÚDO UTILIZANDO LISTEN E DECLARAÇÃO DA PORTA, POR FIM CHAMANDO UMA CALLBACK
})
