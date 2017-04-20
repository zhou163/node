import authStyles from 'styles/auth.less';
import Button from 'components/button';
import React, {PropTypes} from 'react';
import Component from 'components/component';
import bind from 'decorators/bind';

export default class register extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    fieldChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    reconfirmPassword: PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    error: PropTypes.string
  };

  @bind
  changeUsername (event) {
    this.props.fieldChange('username', event.target.value);
  }

  @bind
  changePassword (event) {
    this.props.fieldChange('password', event.target.value);
  }


  @bind
  changeReconfirmPassword (event) {
    this.props.fieldChange('reconfirmPassword', event.target.value);
  }

  @bind
  changeName(event) {
    this.props.fieldChange('name', event.target.value);
  }

  @bind
  changeEmail(event) {
    this.props.fieldChange('email', event.target.value);
  }
  
  render () {
    return (
      <div>
        <div className={authStyles.title}>
          Welcome back!
        </div>
        <div className={authStyles.subTitle}>
          Login with your account below to get started
        </div>
        <form className={authStyles.form} onSubmit={this.props.onSubmit}>
          <label>
            <i className='nc-icon-outline users_single-01' />
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={this.props.username}
              onChange={this.changeUsername}
            />
          </label>
          <label>
            <i className='nc-icon-outline users_single-02' />
            <input
                type='text'
                name='name'
                placeholder='name'
                value={this.props.name}
                onChange={this.changeName}
            />
          </label>
          <label>
            <i className='nc-icon-outline ui-1_lock' />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.props.password}
              onChange={this.changePassword}
            />
          </label>

          <label>
            <i className='nc-icon-outline ui-1_lock' />
            <input
                type='password'
                name='reconfirmPassword'
                placeholder='reconfirmPassword'
                value={this.props.reconfirmPassword}
                onChange={this.changeReconfirmPassword}
            />
          </label>

          <label>
            <i className='nc-icon-outline ui-1_lock' />
            <input
                type='email'
                name='email'
                placeholder='email'
                value={this.props.email}
                onChange={this.changeEmail}
            />
          </label>
          <Button primary full big onClick={this.props.onSubmit} style={{marginTop: 40}}>
            Let's get started
          </Button>
          {<div className={authStyles.error}>{this.props.error && this.props.error || ' '}</div>}
          <input type='submit' hidden  />
        </form>
      </div>
    );
  }
}
