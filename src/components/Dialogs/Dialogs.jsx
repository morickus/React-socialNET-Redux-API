import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

function Dialogs(props) {

    let addMessage = () => {
        props.addMessageActionCreator();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChangeActionCreator(text);
    }

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id} activeClassName={s.active} />);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message} key={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <hr/>
                    <span>New message</span>
                    <div><textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} /></div>
                    <div><button onClick={addMessage}>Add message</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;