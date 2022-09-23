const express = require('express');
const Joi = require('joi');
const app = express();



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
    res.status(200).send(result);
});


app.get('/login',(req,res) => {

});

port = process.env.PORT || 3000;
app.listen(port , () => console.log('listening on port' + port  + ' !!!'));
