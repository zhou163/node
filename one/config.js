var rc = require('rc');

module.exports = rc('one', {
  port: process.env.PORT || 80,
  devPort: process.env.DEV_PORT || 8181,
  db: {
    uri: process.env.RELAX_MONGO_URI || 'mongodb://localhost/one'
  },
  session: {
    secret: process.env.RELAX_SESSION_SECRET || 'Is very secret'
  },
  logger: {
    transports: {
      Console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
      }
    },
    exitOnError: false
  }
});