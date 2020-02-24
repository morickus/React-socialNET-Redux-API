import React from 'react'
import { required, maxLengthCreator } from '../../../utils/validator/validator';
import { Field } from 'redux-form';
import { Element } from '../../common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100);
const Textarea = Element("textarea");

export const AddMessageForm = (props) =>  {
    return (
        <div>
            <hr />
            <span>New message</span>
            <form onSubmit={props.handleSubmit}>
                <div><Field name="textBody" component={Textarea} placeholder="Enter your message" validate={[required, maxLength100]} /></div>
                <div><button>Add message</button></div>
            </form>
        </div>
    )
}