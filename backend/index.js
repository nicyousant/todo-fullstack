import express from 'express';

import cors from 'cors' //middleware function

const app = express()

const port = 8080

app.use(cors()) // enable use of cors


app.get('/', (req, res) => {
    res.json('Hello World! (from server)')
})

app.listen(port, () => {
    console.log('Listening on port: ' + port)

})