import React, {Component} from 'react';
import firebaseApp from "../config/firebase";

class MessageBox extends Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.state = {
            chatlist: '',
        };
    }

    onChange(e){
        this.setState({
            chatlist: e.target.value,
        });
    }
    onKeyup(e){
        if(e.keyCode === 13 && (e.target.value).trim() !== ''){
            e.preventDefault();
                let ip = require("ip");
                let date = new Date();
                let dbCon = firebaseApp.database().ref('/chatlist');
                dbCon.push({
                    message: (e.target.value).trim(),
                    date: date.toLocaleDateString(),
                    time: date.toLocaleTimeString(),
                    ipAddress: ip.address(),
                    email: localStorage.email
                });
                this.setState({
                    chatlist: '',
                });
        }
    }
    render(){
        return(
            <form>
                <div className="chat-message clearfix">
                    <textarea
                        id="message-to-send"
                        className="textarea"
                        placeholder="Gõ vào đây và nhấn <enter>"
                        onChange={this.onChange}
                        onKeyUp={this.onKeyup}
                        value={this.state.chatlist}>
                    </textarea>
                    <button>Gửi</button>
                </div>
            </form>
        )
    }
}

export default MessageBox