"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description: 用户
 * @version:
 * @Author: xuml31350
 * @Date: 2020-11-18 19:14:42
 * @LastEditors: xml
 * @LastEditTime: 2020-11-23 21:57:45
 */
const query_1 = __importDefault(require("../query"));
/**
 * @Author: xuml31350
 * @description: 注册用户
 * @param {*}
 * @return {*}
 */
// 注册用户
const insertUser = function (value) {
    let _sql = "insert into users set user_name=?,mobilephone=?,email=?,user_password=?,last_modified=?;";
    return query_1.default(_sql, value);
};
/**
 * @Author: xuml31350
 * @description: 查询用户
 * @param {*}
 * @return {*}
 */
const queryUser = function () {
    let _sql = "select * from tb_user;";
    return query_1.default(_sql, null);
};
exports.default = {
    insertUser,
    queryUser
};
