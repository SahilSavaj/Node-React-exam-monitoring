const {getClient}=require('../database/database_connect')

module.exports.Login = async (data) => {
    const client =await getClient();
    const log_users = await client.query('SELECT username,password,image FROM users \
    WHERE username = $1 AND password=$2',[data.username,data.password]);
    // console.log(log_users.rows)
    const client_details_from_db=log_users.rows[0]

    if (log_users.rows.length ===1){
        // Currently Implementing fake image detection Late image recognition to be implemented
        if (client_details_from_db.image===data.image){
            return [200,'User Found.']
        }
        return [400,'Face Verification Failed']
    }
    else{
        return [404,'User Not Found.']
    }
  };