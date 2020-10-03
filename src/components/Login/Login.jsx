import React from 'react';
import { reduxForm } from 'redux-form';
import { Element, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validator/validator';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';

const Input = Element("input");

function LoginForm({handleSubmit, error}) {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={style.formSumaryError}>{error}</div>}
            <div>
                <label htmlFor="email">Email</label>
                {createField("Email", "email", Input, [required], "text")}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                {createField("Password", "password", Input, [required], "password")}
            </div>
            <div>
                {createField(null, "rememberMe", "input", null, "checkbox")}
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