/*
 * @Description: 
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 19:55:10
 * @LastEditors: xml
 * @LastEditTime: 2020-11-23 22:08:51
 */
import * as Koa from 'koa'
import commonUtils from '../../common/common.utils'
import userSql from '../../../mysql/user/user.sql'


export default class userService {

  /**
   * @Author: xuml31350
   * @description: 注册用户
   * @param {Koa} ctx
   * @return {*}
   */
  static async insertUser(ctx: Koa.Context, next: Koa.Next) {
    const lastModifyTime = commonUtils.getNowTime();
    let params  = ctx.request.body;
    let data = await userSql.insertUser({
      ...params,
      'last_modified': lastModifyTime
    })
    return data
  }

  /**
   * @Author: xuml31350
   * @description: 查询用户
   * @param {*} ctx
   * @return {*}
   */
  static async queryUser(ctx: any) {
    let data: object[] =  await userSql.queryUser();
    return data
  }
} 