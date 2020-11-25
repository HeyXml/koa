"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @version:
 * @Author: xuml31350
 * @Date: 2020-11-18 19:08:53
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-24 16:26:02
 */
const mysql = require('mysql');
// import { createPool } from 'mysql';
const default_config_1 = __importDefault(require("../config/default.config"));
const pool = mysql.createPool({
    host: default_config_1.default.database.HOST,
    user: default_config_1.default.database.USERNAME,
    password: default_config_1.default.database.PASSWORD,
    database: default_config_1.default.database.DATABASE
});
const query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            }
            else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
};
exports.default = query;
