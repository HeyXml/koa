/*
 * @Description: 数据库连接配置
 * @version: 
 * @Author: xuml31350
 * @Date: 2020-11-18 18:35:02
 * @LastEditors: xuml31350
 * @LastEditTime: 2020-11-23 17:19:41
 */

interface Config {
  port: number,
  database: {
    DATABASE: string,
    USERNAME: string,
    PASSWORD: string,
    PORT: string,
    HOST: string
  }
}
const config: Config = {
  // 启动端口
  port: 3001,
  // 数据库配置
  database: {
    DATABASE: 'xml',
    USERNAME: 'root',
    PASSWORD: 'donkey@19960229',
    PORT: '3306',
    HOST: '121.196.183.21'
  }
}

export default config