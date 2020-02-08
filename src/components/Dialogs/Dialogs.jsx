import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

function Dialogs(props) {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <span>New message</span>
                    <div><textarea ref={newMessageElement}></textarea></div>
                    <div><button onClick={addMessage}>Add message</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;