const {getClient}=require('../database/database_connect')

module.exports.Verify = async (data) => {
    const client =await getClient();
    const verif_users = await client.query('SELECT image FROM users WHERE username = $1',[data.username]);
    console.log(verif_users.rows.length)
    if (verif_users.rows.length ===1){
        return [200,'Proceed to face check']
    }
    else{
        return [404,'User Not Found.']
    }
  };