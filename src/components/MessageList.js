import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state  = {
            chatlist: []
        };
        let app =this.props.db.database().ref('/chatlist');

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
                <div key={ index } className="card">
                    <div className="card-content">
                        <i> <Message message = { message.time} /> : </i>
                        <Message message = {message.message} />
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

export default MessageList