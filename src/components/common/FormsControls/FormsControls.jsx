import React from 'react'
import styles from './FormsControls.module.css';
import { Field } from 'redux-form';

export const Element = (Element) => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            { hasError && <div><span>{error}</span></div> }
            <Element {...input} {...props} />
        </div>
    )
}

export const createField = (placeholder, name, component, validators, type) => (
    <Field placeholder={placeholder} name={name} component={component} validate={validators} type={type} />);