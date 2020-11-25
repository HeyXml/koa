"use strict";
/*
 * @Author: your name
 * @Date: 2020-11-23 20:25:07
 * @LastEditTime: 2020-11-23 21:04:42
 * @LastEditors: xml
 * @Description: In User Settings Edit
 * @FilePath: \koa\src\middlewares\router\index.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../middlewares/controller/user/user.controller"));
exports.default = (app, router) => {
    router.get('/queryUser.json', user_controller_1.default.queryUser);
    app.use(router.routes());
};
