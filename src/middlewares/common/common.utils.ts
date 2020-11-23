/*
 * @Description: 
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 19:28:40
 * @LastEditors: xml
 * @LastEditTime: 2020-11-23 21:21:52
 */
import moment from 'moment'
export default class CommonUtils {
  /**
   * @Author: xuml31350
   * @description: 每条sql插入最后修改时间
   * @param {*}
   * @return {*}
   */ 
  static getNowTime: () => string = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }
}

