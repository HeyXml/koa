"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_utils_1 = __importDefault(require("../../common/common.utils"));
const user_sql_1 = __importDefault(require("../../../mysql/user/user.sql"));
class userService {
    /**
     * @Author: xuml31350
     * @description: 注册用户
     * @param {Koa} ctx
     * @return {*}
     */
    static async insertUser(ctx, next) {
        const lastModifyTime = common_utils_1.default.getNowTime();
        let params = ctx.request.body;
        let data = await user_sql_1.default.insertUser(Object.assign(Object.assign({}, params), { 'last_modified': lastModifyTime }));
        return data;
    }
    /**
     * @Author: xuml31350
     * @description: 查询用户
     * @param {*} ctx
     * @return {*}
     */
    static async queryUser(ctx) {
        let data = await user_sql_1.default.queryUser();
        return data;
    }
}
exports.default = userService;
