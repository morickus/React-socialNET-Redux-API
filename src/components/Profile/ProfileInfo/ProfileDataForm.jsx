import React from 'react';
import { createField, Element } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';
import { reduxForm } from 'redux-form';

const TextArea = Element("textarea");
const Input = Element("input");

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button>save</button></div>
			{error && <div className={style.formSummaryError}> {error} </div>}
			<div className={s.fullName}><b>Name</b>: {createField("Full name", "fullName", Input, [])}</div>
      <div><b>About me</b>: {createField("About me", "aboutMe", TextArea, [])}</div>
      <div><b>Looking for a job</b>: {createField("", "lookingForAJob", Input, [], "checkbox")}</div>
      <div><b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", TextArea, [])}</div>

      <div><b>Contacts</b> {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={s.contact}>{key}: {createField(key, "contacts." + key, Input, [])}</div>
      })}</div>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({ form: 'profileEdit' })(ProfileDataForm);

export default ProfileDataReduxForm;