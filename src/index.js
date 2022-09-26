const express = require('express');
const Joi = require('joi');
const { Client } = require('pg');
const { resourceUsage } = require('process');
const { stringify } = require('querystring');
const app = express();


let con = new Client ({
    host : 'ec2-52-207-90-231.compute-1.amazonaws.com',
    user : 'lwwkvpsrjarzfe',
    password : '57da08bf792a60fdf834f5e43958b0b0b70027564c035aa43f480f2e12d20ffb',
    ssl:{
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      },
    database : 'dbbp6ebo0ffo4d',
    port : '5432'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});





app.use(express.json());

app.post('/registration',(req,res) =>{

    const schema = {
        name : Joi.string().required(),
        username : Joi.string().required(),
        sapid :Joi.string().required(),
        password : Joi.string().required(),
        email : Joi.string().required(),
        is_admin : Joi.boolean()
    };

    const result = Joi.validate(req.body,schema);
    
    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return 
    } 
    let info = result['value'];
    
    let txt_query = 'INSERT INTO public.users(name,username,password,email,sapid,is_admin) VALUES($1,$2,$3,$4,$5,$6)';
    con.query(txt_query,[info.name,info.username,info.password,info.email,info.sapid,info.is_admin]);              // updating the database if results are okay
    res.status(200).send(info);
});


app.get('/login',(req,res) => {

});



port = process.env.PORT || 3000;
app.listen(port , () => console.log('listening on port' + port  + ' !!!'));

