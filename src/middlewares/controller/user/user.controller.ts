/*
 * @Author: xml
 * @Date: 2020-11-23 20:01:09
 * @LastEditors: xml
 * @LastEditTime: 2020-11-23 22:09:42
 * @Description: file content
 */

import * as Koa from "koa"
import userService from '../../service/user/user.service'

export default class UserController {

  /**
   * @Author: xml
   * @description: 查询用户
   * @param {Koa} ctx
   * @return {*}
   */
  static async queryUser(ctx: Koa.Context, next: Koa.Next) {
    let data: object[] =  await userService.queryUser(ctx);
    ctx.success(data)
  }

}
