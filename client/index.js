const express = require("express")
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())

app.get("/", async (req, res) => {
    res.status(200).json({ data: 'Ответ сервера' })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${ port }`)
})

