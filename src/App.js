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
                    <div className="chat_top">
                        <div className="supportInfo">
                            <div className="spImg">
                                <img src={'https://image-us.24h.com.vn/upload/1-2018/images/2018-03-25/1521987450-868-thuy-vi-3-1521984812-width650height813.jpg'}/>
                            </div>
                            <div className="spInfor">
                                <p className="spName">Chat Room Vip▾</p>
                                <p className="spHotLine">0988 889 999</p>
                            </div>
                            <a className="logoNhanh">
                                <img src={'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'}  alt="logo"/>
                            </a>
                        </div>
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
