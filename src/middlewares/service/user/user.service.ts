/*
 * @Description: 
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 19:55:10
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-23 17:26:05
 */
import { concatLastModifyTime } from '../../commonUtils/utils'
import userSql from '../../../mysql/user/user.sql'
import * as Koa from "koa"


export default class userService {

  /**
   * @Author: xuml31350
   * @description: 注册用户
   * @param {Koa} ctx
   * @return {*}
   */
  static async insertUser(ctx: any) {
    const lastModifyTime = concatLastModifyTime();
    let data = ctx.request.body;
    await userSql.insertUser({
      ...data,
      'last_modified': lastModifyTime
    })
  }

  /**
   * @Author: xuml31350
   * @description: 查询用户
   * @param {*} ctx
   * @return {*}
   */
  static async queryUser(ctx: any) {
    const data = await userSql.queryUser();
    ctx.response.body = data;
  }
} 