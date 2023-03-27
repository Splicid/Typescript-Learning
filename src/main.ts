import express from 'express'
const app = express();

app.use(express.static(__dirname + "/css"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
    return console.log(`express is listening at port 3000`)
})