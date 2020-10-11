import React from 'react'
import { required, maxLengthCreator } from '../../../utils/validator/validator';
import { createField, Element } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';

const maxLength100 = maxLengthCreator(100);
const TextArea = Element("textarea");

export const AddMessageForm = (props) => {
  return (
    <div>
      <hr />
      <span>New message</span>
      <form onSubmit={props.handleSubmit}>
        <div>{createField("Enter your message", "textBody", TextArea, [required, maxLength100])}</div>
        <div><button>Add message</button></div>
      </form>
    </div>
  )
}

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(AddMessageForm);

export default DialogsReduxForm;