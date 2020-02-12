import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {

    let addMessage = () => {
        props.store.dispatch( addMessageActionCreator() );
    }

    let onMessageChange = (text) => {
        props.store.dispatch( onMessageChangeActionCreator(text) );
    }

    let state = props.store.getState().dialogsPage;

    return (
        <Dialogs addMessageActionCreator={ addMessage } 
            onMessageChangeActionCreator={ onMessageChange } 
            dialogsPage={ state } />
    );
}

export default DialogsContainer;