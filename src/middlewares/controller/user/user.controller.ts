/*
 * @Description: 
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-23 15:06:20
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-23 17:08:45
 */
import * as Koa from "koa"
import { Controller, Get, Ctx, } from 'koa-controllers'
import userService from '../../service/user/user.service'

@Controller
export default class UserController {

  @Get('/queryUser.json')
  public async queryUser(@Ctx ctx: Koa.BaseContext) {
    await userService.queryUser(ctx);
  }

}

// router.get('/queryUser.json', async(ctx: Koa.BaseContext, next: () => Promise<any>) => {
//   await user.queryUser(ctx);
// })