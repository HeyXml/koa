"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description: 启动文件
 * @version:
 * @Author: xuml31350
 * @Date: 2020-11-18 09:04:30
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-24 17:44:30
 */
// const Koa = require('koa');
const Koa = require("koa");
const router = require('koa-router')();
const path = require('path');
// 解析提交的表单信息
const bodyParser = require("koa-bodyparser");
// 数据库的操作
const session = require("koa-session-minimal");
const MysqlStore = require("koa-mysql-session");
// 数据库配置
const default_config_1 = __importDefault(require("./config/default.config"));
const router_index_1 = __importDefault(require("./router/router.index"));
const router_response_1 = __importDefault(require("./middlewares/common/router.response"));
const staticCache = require('koa-static-cache');
const app = new Koa();
app.use(router_response_1.default({}));
// session存储配置
const sessionMysqlConfig = {
    user: default_config_1.default.database.USERNAME,
    password: default_config_1.default.database.PASSWORD,
    database: default_config_1.default.database.DATABASE,
    host: default_config_1.default.database.HOST,
};
// 配置session中间件
app.use(session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
}));
// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname , './public')
// ))
// 缓存
app.use(staticCache(path.join(__dirname, './src/public'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
}));
app.use(staticCache(path.join(__dirname, './src/images'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
}));
app.use(bodyParser({
    formLimit: '1mb'
}));
router_index_1.default(app, router);
app.listen(default_config_1.default.port);
console.log(`listening on port ${default_config_1.default.port}`);
