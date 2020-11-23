/*
 * @Description: 
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 19:08:53
 * @LastEditors: xml
 * @LastEditTime: 2020-11-23 22:08:07
 */
import { createPool } from 'mysql';
import config from '../config/default.config.js'

const pool  = createPool({
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