const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(express.json()) // Middleware to parse JSON bodies

app.use(cors())

app.post('/execute-code', (req, res) => {
  const ENDPOINT_TOKEN = process.env.VITE_API_TOKEN || ''

  // Extract the "message" from the request body
  const message = req.body.query || ''

  console.log(message)

  const body = JSON.stringify({
    message: message,
  })

  fetch(
    'https://dry-pan-cyan-phi-6.dave.craft.ai/endpoints/persistence-simple-vllm-test',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `EndpointToken ${ENDPOINT_TOKEN}`,
      },
      body,
    }
  )
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => {
          throw new Error(text)
        })
      }
      return response.json()
    })
    .then(data => {
      res.json(data) // Send the response back to the client
    })
    .catch(error => {
      res.status(500).json({ error: error.message }) // Send an error response back to the client
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
