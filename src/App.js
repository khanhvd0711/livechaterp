import React, {Component} from 'react';
import firebaseApp from "./config/firebase";
import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
// import { BrowserRouter, Route, withRouter } from "react-router-dom";

class App extends Component {
    render() {
        // return (
        //     <BrowserRouter>
        //         <div className="nChat">
        //             <div className="chat_header">
        //                 <Route component={Header}/>
        //             </div>
        //             <div className="chat_body">
        //                 <div className="box_chat">
        //                     <Route component={MessageList} db={firebaseApp}/>
        //                     {/*<MessageList />*/}
        //                 </div>
        //             </div>
        //             <div className="chat_footer">
        //                <Route component={MessageBox}/>
        //             </div>
        //         </div>
        //     </BrowserRouter>
        // );
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

// export default withRouter(App);
export default App;

