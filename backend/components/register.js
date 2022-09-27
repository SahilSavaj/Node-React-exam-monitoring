const {getClient}=require('../database/database_connect')

module.exports.Register = async (data) => {
    const client =await getClient();
    const reg_users = await client.query('SELECT username FROM users WHERE username = $1',[data.username]);
    if(data!=={}){
        if(data.name!=='' && data.username!=='' && data.password!=='' && data.email!=='' &&
        data.sapid!=='' && data.image!==''){
            if (reg_users.rows.length >=1){
                return [405,'User Already Registered.']
            }
            else {
            // const reg_users = await client.query('INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6,$7)',
            // [data.name,data.username,data.password,data.email,data.sapid,data.image,data.is_admin]);
            return [200,'Registeration Successful.']
            }
        }
        else{
            if(data.name===''){
                return [400,'Name cannot be Empty.']
            }
            if(data.username===''){
                return [400,'Username cannot be Empty.']
            }
            if(data.password===''){
                return [400,'Password cannot be Empty.']
            }
            if(data.email===''){
                return [400,'Email cannot be Empty.']
            }
            if(data.sapid===''){
                return [400,'SapID cannot be Empty.']
            }
            if(data.image===''){
                return [400,'Image is not Captured.']
            }
            
        }}
    else{
        return [400,'Form data is Empty']
    }
    // await client.end()
    return reg_users.rows;
  };