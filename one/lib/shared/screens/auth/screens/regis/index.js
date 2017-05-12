import request from 'superagent';
import React, {PropTypes} from 'react';
import Component from 'components/component';
import logger from 'logger';

import Register from './components/register';

export default class registerContainer extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    getInitState () {
        return {
            username: '',
            password: '',
            reconfirmPassword:'',
            name:'',
            email:''
        };
    }

    onSubmit (event) {
       
        event.preventDefault();
        const {username, password,reconfirmPassword,name,email} = this.state;

        request
            .post('/web/register')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({username, password,reconfirmPassword,name,email})
            .end((error, res) => {
                
                if (error) {
                    this.setState({
                        error: JSON.stringify(res.body.message)
                        
                        
                    });
                } else {
                    // window.location.href = '/web/login';
                    window.location.href = '/web/login';
                   
                }
            });


    }

    fieldChange (id, value) {
        this.setState({
            [id]: value
        });
    }

    render () {
        return (
            <Register
        ref='register'
        {...this.props}
        {...this.state}
        onSubmit={::this.onSubmit}
        fieldChange={::this.fieldChange}
    />
    );
    }
}
