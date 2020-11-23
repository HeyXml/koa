/*
 * @Author: your name
 * @Date: 2020-11-23 20:25:07
 * @LastEditTime: 2020-11-23 21:04:42
 * @LastEditors: xml
 * @Description: In User Settings Edit
 * @FilePath: \koa\src\middlewares\router\index.ts
 */

 import userController from '../middlewares/controller/user/user.controller'

export default (app: any, router: any) => {
	router.get('/queryUser.json', userController.queryUser)
	app.use(router.routes())
}