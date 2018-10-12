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
            return (
                <div key={ index } className={message.email === currentUser ? 'currentMessenger' : 'card'}>
                    <div className="blockText">
                        {/*<b className="name-key pull-left"> {message.email} </b>*/}
                        {/*<i className="pull-left"> ({ message.time} ):</i>*/}
                        <span className="message">{message.message}</span>
                    </div>
                    <div className="blockUser">
                        <img alt="test" src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-1/p50x50/42119611_2266904666875334_2824307332060545024_n.jpg?_nc_cat=106&oh=a04fcaedf4f605c4746522e2fcb1605a&oe=5C5935E1"/>
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