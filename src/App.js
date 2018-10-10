import React, {Component} from 'react';
import firebaseApp from "./config/firebase";
import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';

class App extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>
                <div className="nChat">
                    <div className="chat_header">
                        <Header/>
                        <button onClick={this.logout}>Logout</button>
                    </div>
                    <div className="chat_body">
                        <div className="box_chat">
                            <MessageList db={firebaseApp}/>
                        </div>
                    </div>
                    <div className="chat_footer">
                        <MessageBox/>
                    </div>
                </div>
            </div>
        );

    }

}

export default App;


