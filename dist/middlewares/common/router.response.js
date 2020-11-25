"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (option) => {
    return async (ctx, next) => {
        /**
         * @Author: xml
         * @description: 成功处理数据
         * @param {Koa} ctx
         * @param {Koa} next
         * @return {*}
         */
        ctx.success = (data) => {
            ctx.type = option.type || 'json';
            ctx.response.body = {
                code: option.successCode || 200,
                msg: option.successMsg || 'success',
                data: data
            };
        };
        /**
         * @Author: xml
         * @description: 错误处理数据
         * @param {Koa} ctx
         * @param {Koa} next
         * @return {*}
         */
        ctx.failed = (msg, code) => {
            ctx.type = option.type || 'json';
            ctx.body = {
                code: code || option.failCode || 99,
                msg: msg || option.successMsg || 'fail',
            };
        };
        await next();
    };
};
