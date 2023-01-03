const express = require('express')
const userRoute = require('../routes/user');
const authRoute = require('../routes/auth');
const postRoute = require('../routes/posts');
const app = express()
require("../db/connect");

// const path = require('path')
// const logger = require('morgan') 
const cors = require('cors');

// app.use(logger('dev'))
app.use(cors())
// app.use(express.urlencoded({extended:false}))

//send json data 
app.use(express.json())

//routes
app.use('/api/',userRoute)
app.use('/api/',authRoute)
app.use('/api/',postRoute)

// app.use(express.static(path.join(__dirname, './blog/dist')))

// app.get('*', function (_,res) {
//     res.sendFile(
//         path.join(__dirname, './blog/dist/index.html'),
//         function (err){
//             if(err){
//                 res.status(500).send(err)
//             }
//         }
//     )
// })


const PORT =  process.env.PORT || 8000

app.listen(PORT, console.log(`listening on port ${PORT}`))