import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import firebaseApp from "../config/firebase";

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state  = {
            authenticated: false,
            chatlist: []
        };
        let app = firebaseApp.database().ref('/chatlist');

        app.on('value', snapshot => {
            this.getData(snapshot.val());
        });
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
                        <div>
                            <b className="name-key pull-left"> {message.userId} </b>
                            <i className="pull-left"> ({ message.time} ):</i>
                        </div>
                        <div className="message">{message.message}</div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                {messageNodes}
            </div>
        );
    }
}
MessageList.defaultProps = {
    messageNodes: []
};
export default MessageList