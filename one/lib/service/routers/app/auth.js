import {Router} from 'express';

const authRouterApp = new Router();

var responseLogin = {

    success: 'true',
    data: {}
}

authRouterApp.get('/app/login', (req, res) => {

    res.status(200).json(responseLogin);

});

export default authRouterApp;