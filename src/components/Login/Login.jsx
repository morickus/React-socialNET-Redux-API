import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Element } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validator/validator';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';

const Input = Element("input");

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={style.formSumaryError}>{props.error}</div>}
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" placeholder='Email' component={Input} validate={[required]} type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" placeholder='Password' component={Input} validate={[required]} type="password" />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />
                <label htmlFor="rememberMe">remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login(props) {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);