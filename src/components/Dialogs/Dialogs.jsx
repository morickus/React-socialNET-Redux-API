import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { reduxForm } from 'redux-form';
import { AddMessageForm } from './AddMessageForm/AddMessageForm';


const DialogsReduxForm = reduxForm({ form: 'dialogs' })(AddMessageForm);

function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id} activeClassName={s.active} />);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} key={m.id} />);

    let addMessage = (formData) => {
        props.addMessageActionCreator(formData.textBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <DialogsReduxForm onSubmit={addMessage} />
            </div>
        </div>
    );
}

export default Dialogs;