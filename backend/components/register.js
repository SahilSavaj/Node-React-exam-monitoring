const {getClient}=require('../database/database_connect')
global.results=[];
global.errors='';
module.exports.Register = async (data) => {
    try{
        const client =await getClient();
        client.connect()
        client.query(`SELECT * FROM users WHERE username ='${data.username}'`, (err, result) => {
            if (err) {
                console.log(err);
                global.errors = err;
            }
            else {
                console.log(result.length, "asdas");
                }
                client.end()
                return [400,'Form data is Empty']
        });
        // if(data!=={}){
        //     if(data.name!=='' && data.username!=='' && data.password!=='' && data.email!=='' &&
        //     data.sapid!=='' && data.image!==''){
        //         console.log(global.results)

        //         if (global.results!=[]){
        //             return [405,'User Already Registered.']
        //         }
        //         else {
        //         // console.log(data) 
        //         client.query(`INSERT INTO users VALUES ('${data.username}','${data.name}','${data.password}','${data.sapid}','${data.image}','${data.email}',${data.is_admin})`,(err)=>{
        //             if (err) {global.errors=err;console.log(err,"asdasdasdasd")};
        //         });
        //         console.log(global.errors)
        //         if (global.errors!=''){
        //             return[500,global.errors]
        //         }
        //         else{
        //             return [200,'Registeration Successful.']

        //         }
        //         }
        //     }
        //     else{
        //         if(data.name===''){
        //             return [400,'Name cannot be Empty.']
        //         }
        //         if(data.username===''){
        //             return [400,'Username cannot be Empty.']
        //         }
        //         if(data.password===''){
        //             return [400,'Password cannot be Empty.']
        //         }
        //         if(data.email===''){
        //             return [400,'Email cannot be Empty.']
        //         }
        //         if(data.sapid===''){
        //             return [400,'SapID cannot be Empty.']
        //         }
        //         if(data.image===''){
        //             return [400,'Image is not Captured.']
        //         }
                
        //     }}
        // else{
        //     return [400,'Form data is Empty']
        // }
        
        // return reg_users.rows;
    }  
    catch(err){
        return [500,err]
    }
};