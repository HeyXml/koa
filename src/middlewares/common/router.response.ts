/*
 * @Author: xml
 * @Date: 2020-11-23 21:23:24
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-24 17:44:02
 * @Description: file content
 */
import * as Koa from "koa"

interface RouterResponse {
  (ctx: Koa.Context, next: Koa.Next): void
}

export default (option: any): RouterResponse => {
  return async (ctx: Koa.Context, next: Koa.Next) =>  {
    /**
     * @Author: xml
     * @description: 成功处理数据
     * @param {Koa} ctx
     * @param {Koa} next
     * @return {*}
     */
    ctx.success = (data: any) => {
      ctx.type = option.type || 'json'
      ctx.response.body = {
          code : option.successCode || 200,
          msg : option.successMsg || 'success',
          data : data
      }
    }

    /**
     * @Author: xml
     * @description: 错误处理数据
     * @param {Koa} ctx
     * @param {Koa} next
     * @return {*}
     */
    ctx.failed = (msg: string, code: number) =>  {
      ctx.type = option.type || 'json'
      ctx.body = {
          code : code || option.failCode || 99,
          msg : msg || option.successMsg || 'fail',
      }
    }

    await next()
  }
}