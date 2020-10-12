import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Element } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validator/validator';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';
import s from './Login.module.css'

const Input = Element("input");

function LoginForm({ handleSubmit, error, captchaUrl }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        {createField("Email", "email", Input, [required], "text")}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        {createField("Password", "password", Input, [required], "password")}
      </div>
      <div>
        <label htmlFor="rememberMe">remember me</label>
        {createField("", "rememberMe", Input, [], "checkbox")}
      </div>
      <div>{ captchaUrl && <img src={captchaUrl} />}</div>
      <div>{ captchaUrl && createField("Symbols from image", "captcha", Input, [required], "text") }</div>
      <div>
        <button>Login</button>
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

function Login(props) {
  let onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <div className={s.login}>
      <h2>LOGIN</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);