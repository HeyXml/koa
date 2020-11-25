/*
 * @Author: xml
 * @Date: 2020-11-23 20:01:09
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-25 09:15:18
 * @Description: file content
 */

import * as Koa from "koa"
import userService from '../../service/user/user.service'

export default class UserController {

  /**
   * @Author: xml
   * @description: 查询所有用户
   * @param {Koa} ctx
   * @return {*}
   */
  static async queryUser(ctx: Koa.Context, next: Koa.Next) {
    let data: object[] =  await userService.queryUser(ctx);
    ctx.success(data)
  }

  /**
   * @Author: xml
   * @description: 注册用户
   * @param {Koa} ctx
   * @return {*}
   */
  static async insertUser(ctx: Koa.Context, next: Koa.Next) {
    let data: object[] =  await userService.insertUser(ctx, next);
    ctx.success(data)
  }

}
