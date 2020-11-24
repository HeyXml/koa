/*
 * @Description: 启动文件
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 09:04:30
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-24 17:44:30
 */
// const Koa = require('koa');
const Koa = require("koa")
const router = require('koa-router')()
const path = require('path')
// 解析提交的表单信息
const bodyParser = require("koa-bodyparser")
// 数据库的操作
const session =  require("koa-session-minimal")
const MysqlStore = require("koa-mysql-session")
// 数据库配置
import config from "./config/default.config"
import routerRegister from './router/router.index'
import routerResponse from './middlewares/common/router.response'

const staticCache = require('koa-static-cache')


const app = new Koa()
app.use(routerResponse({}));

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
app.use(staticCache(path.join(__dirname, './src/public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './src/images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

app.use(bodyParser({
  formLimit: '1mb'
}))

routerRegister(app, router);


app.listen(config.port)

console.log(`listening on port ${config.port}`)