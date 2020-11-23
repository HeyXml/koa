/*
 * @Description: 
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 19:28:40
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-23 17:20:18
 */
import moment from 'moment'

/**
 * @Author: xuml31350
 * @description: 每条sql插入最后修改时间
 * @param {*}
 * @return {*}
 */ 
export const concatLastModifyTime: () => any = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}