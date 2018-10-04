import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';


class App extends Component {
    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyBO3dF3BmWAJZtvM1F2B_E-HBTLCJWt51s",
            authDomain: "thienanblog-2757e.firebaseapp.com",
            databaseURL: "https://thienanblog-2757e.firebaseio.com",
            projectId: "thienanblog-2757e",
            storageBucket: "thienanblog-2757e.appspot.com",
            messagingSenderId: "854038793777"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <div>
                <div className="nChat">
                    <div className="chat_header">
                        <Header/>
                    </div>
                    <div className="chat_body">
                        <div className="box_chat">
                            <MessageList db={firebase} />
                        </div>
                    </div>
                    <div className="chat_footer">
                        <MessageBox db={firebase} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
