import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import {firebaseApp} from "../config/firebase";

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state  = {
            chatlist: []
        };
        let app = firebaseApp.database().ref('/chatlist');

        app.on('value', snapshot => {
            this.getData(snapshot.val());
        });
    }

    componentDidUpdate() {
        // There is a new message in the state, scroll to bottom of list
        const objDiv = document.getElementById('messageList');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    getData(values){
        let messagesVal = values;
        let chatlist = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            })
            .value();
        this.setState({
            chatlist: chatlist
        });
    }


    render(){

        let messageNodes = this.state.chatlist.map((message, index) => {
            return (
                <div key={ index } className="card message ">
                    <div className="card-content">
                        <i> <Message message = { message.time} /> : </i>
                        <Message
                            message = {message.message}
                        />
                    </div>
                </div>
            )
        });
        return (
            <div id="messageList">
                {messageNodes}
            </div>
        );
    }
}
MessageList.defaultProps = {
    messageNodes: []
};
export default MessageList