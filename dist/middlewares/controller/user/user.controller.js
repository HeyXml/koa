"use strict";
/*
 * @Author: xml
 * @Date: 2020-11-23 20:01:09
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-25 09:15:18
 * @Description: file content
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../../service/user/user.service"));
class UserController {
    /**
     * @Author: xml
     * @description: 查询所有用户
     * @param {Koa} ctx
     * @return {*}
     */
    static async queryUser(ctx, next) {
        let data = await user_service_1.default.queryUser(ctx);
        ctx.success(data);
    }
    /**
     * @Author: xml
     * @description: 注册用户
     * @param {Koa} ctx
     * @return {*}
     */
    static async insertUser(ctx, next) {
        let data = await user_service_1.default.insertUser(ctx, next);
        ctx.success(data);
    }
}
exports.default = UserController;
