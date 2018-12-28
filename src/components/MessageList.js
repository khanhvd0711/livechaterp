import React, {Component} from 'react';
// import Message from './Message';
import _ from 'lodash';
import firebaseApp from "../config/firebase";

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state  = {
            authenticated: false,
            chatlist: []
        };
    }
    componentDidMount() {
        let app = firebaseApp.database().ref('/chatlist');

        app.on('value', snapshot => {
            this.setData(snapshot.val());
        });
    }

    setData(values){
        let chatlist = _(values)
            .keys()
            .map($key => {
                let cloned = _.clone(values[$key]);
                cloned.key = $key;
                return cloned;
            })
            .value();
        this.setState({
            chatlist: chatlist
        });
    }


    render(){
        let currentUser = firebaseApp.auth().currentUser.email;
        let messageNodes = this.state.chatlist.map((message, index) => {
            // console.log(message);
            return (
                <div key={ index } className={message.email === currentUser ? 'currentMessenger' : 'card'}>
                    <div className="blockText">
                        <b className="name-key pull-left"> {message.email} - </b>
                        <i className="pull-left"> { message.date}</i>
                        <span className="message">{message.message}</span>
                    </div>
                    <div className="blockUser">
                        <img alt="test" src="https://image-us.24h.com.vn/upload/1-2018/images/2018-03-25/1521987450-868-thuy-vi-3-1521984812-width650height813.jpg"/>
                    </div>
                    <span className="textTime">{message.time}</span>
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