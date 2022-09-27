const express=require('express');
const bodyParser  = require('body-parser');
require('dotenv').config()
var cors = require('cors');
var morgan = require('morgan');

const {getClient}=require('./database/database_connect')
const {Register}=require('./components/register');
const {Login}=require('./components/login');
const {Verify}=require('./components/verify');

 
const PORT = 5000; 
const HOST = '127.0.0.1'; 

 
const app=express();
app.use(cors());  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(morgan('dev'));

function response_parser(body,response){
    return {'response':response,
            'body':body}
        };
 
app.post("/register",async (req,res)=>{
    const myuser=req.body
    console.log(myuser) 
    const resp=await Register(myuser)
    if (resp[0]!==200){
        res.status(resp[0]).send(response_parser(resp[1],resp[0]));
    }
    else{
        res.send(response_parser(resp[1],resp[0]))
    }
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