/*
 * @Description: 用户
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 19:14:42
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-23 17:28:33
 */
import query from '../query'

interface insertUserValue {
  user_name: string,
  user_password: string,
  mobilephone: string,
  email: string,
  last_modified: string
}

/**
 * @Author: xuml31350
 * @description: 注册用户
 * @param {*}
 * @return {*}
 */
// 注册用户
const insertUser = function( value: insertUserValue ) {
  let _sql = "insert into users set user_name=?,mobilephone=?,email=?,user_password=?,last_modified=?;"
  return query( _sql, value )
}

/**
 * @Author: xuml31350
 * @description: 查询用户
 * @param {*}
 * @return {*}
 */
const queryUser = function() {
  let _sql = "select * from tb_user;"
  return query( _sql, null)
}


export default {
  insertUser,
  queryUser
}
