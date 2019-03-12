const mysql = require('mysql');
const config = require('./config');
const db = (query1)=> {
    return new Promise((resolve, reject) => {
        //创建连接池
        const pool = mysql.createPool(config);
        pool.getConnection((err, con) => {
            con.query(query1,(err,res)=>{
                if(err){
                    throw(err);
                    return;
                }else{
                    resolve(res);
                }
                con.release();//结束会话
            });
        });
    });
}
module.exports=db;