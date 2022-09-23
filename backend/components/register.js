const {getClient}=require('../database/database_connect')

module.exports.Register = async (data) => {
    const client =await getClient();
    const reg_users = await client.query('SELECT username FROM users WHERE username = $1',[data.username]);
    console.log(reg_users.rows.length)
    if (reg_users.rows.length >=1){
        return [405,'User Already Registered.']
    }
    else{
        const reg_users = await client.query('INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6,$7)',
        [data.name,data.username,data.password,data.email,data.sapid,data.image,data.is_admin]);
        return [201,'Registeration Successful.']
    }
    // await client.end()
    return reg_users.rows;
  };