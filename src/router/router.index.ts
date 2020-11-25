/*
 * @Author: your name
 * @Date: 2020-11-23 20:25:07
 * @LastEditTime: 2020-11-25 10:01:02
 * @LastEditors: xuml31350
 * @Description: In User Settings Edit
 * @FilePath: \koa\src\middlewares\router\index.ts
 */

import userController from '../middlewares/controller/user/user.controller'

export default (app: any, router: any) => {
	// 查询用户
	router.get('/queryUser.json', userController.queryUser)
	router.post('/insertUser.json', userController.insertUser)
	app.use(router.routes());
	app.use(router.allowedMethods());
}