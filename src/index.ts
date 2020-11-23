/*
 * @Description: 启动文件
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 09:04:30
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-23 17:37:03
 */
// const Koa = require('koa');
import Koa from "koa"
const path = require('path')
// 解析提交的表单信息
const bodyParser = require("koa-bodyparser")
// 数据库的操作
const session =  require("koa-session-minimal")
const MysqlStore = require("koa-mysql-session")
// 数据库配置
import config from "./config/default.config.js"

import { useControllers } from 'koa-controllers';

const staticCache = require('koa-static-cache')


const app = new Koa()


// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))


// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname , './public')
// ))
// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

// 配置服务端模板渲染引擎中间件
// app.use(views(path.join(__dirname, './views'), {
//   extension: 'ejs'
// }))
app.use(bodyParser({
  formLimit: '1mb'
}))

useControllers(app, __dirname + '/src/middlewares/controller/*.ts', {
  multipart: {
    dest: './uploads'
  }
});

app.listen(config.port)

console.log(`listening on port ${config.port}`)