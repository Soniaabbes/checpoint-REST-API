const express= require  ("express")
const connectDB= require('./Config/Connection')
const app = express()
connectDB();
app.use (express.json())
app.use ('/api/user',require('./Routes/Route.js'))
const port =5000
app.listen(port,()=>console.log(`server connecterd on port ${port}`))