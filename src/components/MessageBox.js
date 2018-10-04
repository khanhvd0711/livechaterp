import React, {Component} from 'react';

class MessageBox extends Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.state = {
            chatlist: '',
        };

        //this.setState({});}
    }

    onChange(e){
        this.setState({
            chatlist: e.target.value,
        });
    }
    onKeyup(e){
        if(e.keyCode === 13 && (e.target.value).trim() !== ''){
            e.preventDefault();
            var ip = require("ip");
            ///console.log(ip.address());
            let dbCon = this.props.db.database().ref('/chatlist');
            dbCon.push({
                message: (e.target.value).trim(),
                time: new  Date().toLocaleString(),
                ipAddress: ip.address()
            });
            this.setState({
                chatlist: '',
            });
        }
    }
    render(){
        return(
            <form>
            <textarea
                className="textarea"
                placeholder="Type a message"
                cols="100"
                onChange={this.onChange}
                onKeyUp={this.onKeyup}
                value={this.state.chatlist}>
              </textarea>
            </form>
        )
    }
}

export default MessageBox