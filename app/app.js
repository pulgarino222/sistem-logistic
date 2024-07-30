import express from 'express'
import env from 'dotenv'
import { routes } from './routes/router.js'


env.config()
const PORT= process.env.PORT || 3001
const app= express()

app.use(express.json())//sin esto no se puede obtener ningun req.body o req.params de ningun endpoint 
app.use('/', routes)



app.listen(PORT,()=>{
    console.log(`server in port http://localhost:${PORT}`)
})