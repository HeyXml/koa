/*
 * @Description: 
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 19:08:53
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-23 17:20:51
 */
import { createPool } from 'mysql';
import config from '../config/default.config.js'

const pool  = createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE
});

const query = function( sql: string, values: any ) {

  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err: any, connection: { query: (arg0: string, arg1: any, arg2: (err: any, rows: any) => void) => void; release: () => void; }) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })

}

export default query