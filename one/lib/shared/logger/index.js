
import winston from 'winston';  // 异步日志库
const build = {

    level: 'debug',
    transports: [
      new (winston.transports.Console)(),
      
      new (winston.transports.File)({
      name: 'error-file',
      filename: 'filelog-error.log',
      level: 'error'
    })
    ]
  }


export default new winston.Logger(build);
