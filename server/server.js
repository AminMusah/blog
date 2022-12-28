const express = require('express')
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const app = express()
require("./db/connect");

const cors = require('cors');

app.use(cors())

//send json data 
app.use(express.json())

//routes
app.use('/api/',userRoute)
app.use('/api/',authRoute)
app.use('/api/',postRoute)


const PORT =  process.env.PORT || 8000

app.listen(PORT, console.log(`listening on port ${PORT}`))