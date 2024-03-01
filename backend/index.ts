import {generateQuestion} from './generateNewQues'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app=express()

app.use(cors({origin:"*"}))


app.get('/question',(req,resp)=>{
    const obj=generateQuestion()
    resp.json(obj)
})

app.listen(3000,()=>{
    console.log("lsitening")
})