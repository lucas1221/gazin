const express = require('express')

const app = express()

// middleware
app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/desenvolvedoresRouter.js')
app.use('/api/desenvolvedores', router)

const router2 = require('./routes/niveisRouter.js')
app.use('/api/niveis', router2)


//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})