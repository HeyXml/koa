/*
 * @Description: 
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 19:08:53
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-24 16:26:02
 */
const mysql = require('mysql')
// import { createPool } from 'mysql';
import config from '../config/default.config'

const pool  = mysql.createPool({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE
});

interface Resolve {
  (rows: object[]): void
}

const query = function( sql: string, values: any ) {

  return new Promise(( resolve: Resolve, reject ) => {
    pool.getConnection(function(err: any, connection: { query: (arg0: string, arg1: any, arg2: (err: any, rows: any) => void) => void; release: () => void; }) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows: object[]) => {

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