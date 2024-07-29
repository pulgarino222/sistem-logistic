import mysql from 'mysql2/promise';

let pool;

try{
     pool = mysql.createPool({
        host: 'b9didq1lt0irkujv5o9w-mysql.services.clever-cloud.com',
        user: 'ur1waygynondsbx1',
        database: 'b9didq1lt0irkujv5o9w',
        port: 3306,
        password: 'GewWC9o4hZLyFVpIAMTu',
      })
      console.log(`data base is conecting`)

}catch(err){
    console.log(`error data base no is conection${err}`)
}
    
