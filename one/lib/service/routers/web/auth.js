import {Router} from 'express';
import routeHandler from 'helpers/route-handler';
import getMarkup from 'helpers/get-markup';
import routes from 'routers/auth';
import reducers from 'reducers';
import getDefaultFavicon from 'helpers/default-favicon';
import userModel from '../../models/user';
import passport from 'passport';

const authRouterWeb = new Router();


function injectScript (req, res, next) {



  res.locals.header.push({
    tag: 'link',
    props: {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'
    }
  });
    res.locals.header.push({
        tag: 'link',
        props: {
            rel: 'stylesheet',
            type: 'text/css',
            href: '/assets/auth.css'
        }
    });
    res.locals.header.push(getDefaultFavicon(res));

    res.locals.footer.push({
        tag: 'script',
        props: {
            src: `${res.baseScriptsURL}/assets/auth.js`
        }
    });
    next();
}

authRouterWeb.get('/web*',(req, res,next) => {
    if (req.isAuthenticated()) {
        res.status(200).json('{success:true}');
    } else {
        routeHandler(routes, reducers, req, res, next);
    }


});

authRouterWeb.get('/web/login', injectScript,(req, res) => {

    return res.status(200).send(getMarkup(req.store, res));


});

authRouterWeb.post('/web/login', function (req, res, next) {
    passport.authenticate('local', (err, user) => {
        if (err) {
            res.status(500).send({
                error: 500,
                message: err.message
            });
        } else if (!user) {
            res.status(403).send({
                error: 403,
                message: 'Invalid username and password combination'
            });
        } else {
            req.logIn(user, (error) => {
                if (error) {
                    res.status(500).send({
                        error: 500,
                        message: error.message
                    });
                } else {
                    res.status(200).end();
                }
            });
        }
    })(req, res, next);


});

authRouterWeb.get('/web/register', injectScript,(req, res) => {

    return res.status(200).send(getMarkup(req.store, res));


});

authRouterWeb.post('/web/register', injectScript,(req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let reconfirmPassword = req.body.reconfirmPassword;
    let name = req.body.name;
    let email = req.body.email;

    if(!password || !username){
 return res.status(500).send( {error: 500,
        message: '输入不能为空'});
    }
    if(password !== reconfirmPassword){
          return res.status(500).send( {error: 500,
        message: '两次密码输入不同'});
    }


    
    userModel.create({
        username:username,
        password:password,
        name:name,
        email:email
    },function(err,user){

        if(err){
    
             return res.status(500).send( { error: 500,
        message: err}
               );
        }else{
            return res.status(200).end;
        }


    });

});

export default authRouterWeb;