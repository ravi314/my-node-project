let express = require('express')

let app = express()
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')

let path = require('path')
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next()
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))
//Error Handler 404 - Status Not Found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost')
})
//Error handler for 505
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server is started on ${PORT}`))