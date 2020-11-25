"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @version:
 * @Author: xuml31350
 * @Date: 2020-11-18 19:28:40
 * @LastEditors: xml
 * @LastEditTime: 2020-11-23 21:21:52
 */
const moment_1 = __importDefault(require("moment"));
class CommonUtils {
}
exports.default = CommonUtils;
/**
 * @Author: xuml31350
 * @description: 每条sql插入最后修改时间
 * @param {*}
 * @return {*}
 */
CommonUtils.getNowTime = () => {
    return moment_1.default().format('YYYY-MM-DD HH:mm:ss');
};
