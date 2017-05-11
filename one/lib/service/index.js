import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import authApp from './routers/app/auth';
import connectMongo from 'connect-mongo';
import session from 'express-session';
import mongoose from 'mongoose';
import config from '../../config';
import passport from 'passport';
import authWeb from './routers/web/auth';
import userModel from './models/user';

const app = express();
var LocalStrategy = require('passport-local').Strategy;

app.use(morgan('short'));  //http 请求 日志中间件 
app.use(bodyParser.urlencoded({extended: false}));  //  处理form表单数据。设置可扩展  可以接受对象类型数据结构。如果不设置 只能接受 string | array 
app.use(bodyParser.json({limit: 100000000}));    //处理json 格式数据


// View engine
app.set('views', path.join(__dirname, 'components'));

// session
const MongoStore = connectMongo(session);
app.use(session({
    secret: config.session.secret,
    resave: true,  // 每次请求都重置session的保存时间
    saveUninitialized: false,  // 设置 false 才能修改 session的时间状态
    store: new MongoStore({mongooseConnection: mongoose.connection})   //设置session 存储到mongodb 数据库 持久化
}));

app.use(express.static('public'));
//app.use(express.static(path.join('public')));
// Passport
app.use(passport.initialize());  //初始化 passport  认证中间件
app.use(passport.session());    // 使用 passport   管理session
passport.use(new LocalStrategy(
    function(username, password, done) {              //这个被称为验证回调函数.
        userModel.findOne({ username: username }, function (err, user) {
            if(user != null ){
                if(user.password == password){
                    return done(null , user);
                }else{
                    return done(null, false,{ message: '密码错误' });
                }

            }else {
                return done(null, false, { message: '用户不存在' });
            }
});}));


// serializeUser 用户登录验证成功以后将会把用户的数据存储到 session 中

passport.serializeUser(function(user, done) {
    done(null, user);
});

// deserializeUser 每次请求的时将从 session 中读取用户对象，并将其封装到 req.user

passport.deserializeUser(function(user, done) {
    return done(null, user);
});

app.use(async(req, res, next) => {
    res.locals.header = [
        {
            tag: 'title',
            content: 'one'
        }
    ];

    if (process.env.NODE_ENV !== 'production') {
        res.baseScriptsURL = `http://localhost:${config.devPort}`;
        res.locals.header.push({
            tag: 'script',
            props: {
                src: `${res.baseScriptsURL}/webpack-dev-server.js`
            }
        });
    } else {
        res.baseScriptsURL = '';
    }

    // footer
    res.locals.footer = [{
        tag: 'script',
        props: {
            src: `${res.baseScriptsURL}/assets/common.js`
        }
    }];

    next();
});

app.use(authApp);
app.use(authWeb);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});

export default app;
