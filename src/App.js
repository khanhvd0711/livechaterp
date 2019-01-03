import React, {Component} from 'react';
import firebaseApp from "./config/firebase";
import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';

class App extends Component {
    render() {
        return (
            <div className="nChat">
                <div className="chat_header">
                    <Header/>
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
        );

    }
}

export default App;


