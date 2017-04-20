import 'babel-polyfill';
import app from './lib/service'
import mongoose from 'mongoose';
import logger from './lib/shared/logger';
import padStart from 'lodash/padStart';
import config from './config';


const outline = padStart('', 20, '-');
logger.debug(`\n${outline}\nOne Status\n${outline}`);

// onnect mongoose
if (!config.db) {
    throw new Error('DB: Configuration for MongoDB required');
}
mongoose.Promise = global.Promise; // Use native promises
mongoose.connect(config.db.uri, config.db, (err) => {
    if (err) {
        logger.debug('DB: Not Connected');
    } else {
        logger.debug('DB: Connected');
    }
});

//run service
const server = app.listen(config.port, () => {
    const port = server.address().port;
    logger.debug('URL: http://localhost:%s', port);
    logger.debug('PORT: %s', port);
});
