const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

router.get('/test', (req, res) => {
    res.status(200).json({msg: 'Welcome to the BTC live environment!'})
})

app.use('/', router)

PORT=1234

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})