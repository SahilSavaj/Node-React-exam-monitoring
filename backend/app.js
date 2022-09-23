const express=require('express');
require('dotenv').config()

const {getClient}=require('./database/database_connect')
const {Register}=require('./components/register');
const {Login}=require('./components/login');
const {Verify}=require('./components/verify');


const PORT = 5000;
const HOST = '0.0.0.0';

const app=express();
app.use(express.json())

function response_parser(body,response){
    return {'response':response,
            'body':body}
        };

app.post("/register",async (req,res)=>{
    const myuser=req.body
    const resp=await Register(myuser)
    res.send(response_parser(resp[1],resp[0]))
})

app.post("/login",async (req,res)=>{
    const myuser=req.body
    const resp=await Login(myuser)
    res.send(response_parser(resp[1],resp[0]))
})

app.all("/", (req,res)=>{
    res.send(response_parser("Welcome!",200))
})

app.listen(PORT,HOST,()=>{
    console.log("listening")
})