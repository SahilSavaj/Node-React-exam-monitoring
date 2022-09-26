const express = require('express');
const Joi = require('joi');
const mysql = require('mysql');
const app = express();


let con = mysql.createPool({
    host : 'ec2-52-207-90-231.compute-1.amazonaws.com',
    user : 'lwwkvpsrjarzfe',
    password : '57da08bf792a60fdf834f5e43958b0b0b70027564c035aa43f480f2e12d20ffb'
});
process.on('uncaughtException', function (err) {
    console.log(err);
}); 
con.query('Select * from users',(err,result,fields) =>{
    if (err){
        return console.log(err);
    }
    else{
        return console.log(result);
    }
});



// app.use(express.json());

// app.post('/registration',(req,res) =>{

//     const schema = {
//         name : Joi.string().required(),
//         username : Joi.string().required(),
//         sapid :Joi.string().required(),
//         password : Joi.string().required(),
//         email : Joi.string().required(),
//         is_admin : Joi.boolean()
//     };

//     const result = Joi.validate(req.body,schema);
//     if (result.error){
//         res.status(400).send(result.error.details[0].message);
//         return 
//     } 
//     res.status(200).send(result);
// });


// app.get('/login',(req,res) => {

// });



// port = process.env.PORT || 3000;
// app.listen(port , () => console.log('listening on port' + port  + ' !!!'));
