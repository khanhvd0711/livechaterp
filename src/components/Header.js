import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
            //<nav className="navbar">
              //  <div className="navbar-brand">
                //    <a className="navbar-item">
                  //      {this.props.title}
                    //</a>
                //</div>
            //</nav>
            <div className="chat_top">
                <div className="supportInfo">
                    <div className="spImg">
                        <img alt="test" src={'https://image-us.24h.com.vn/upload/1-2018/images/2018-03-25/1521987450-868-thuy-vi-3-1521984812-width650height813.jpg'}/>
                    </div>
                    <div className="spInfor">
                        <p className="spName">Chat Room Vip▾</p>
                        <p className="spHotLine">0988 889 999</p>
                    </div>
                    <p className="logoNhanh">
                        <img src={'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'}  alt="logo"/>
                    </p>
                </div>
            </div>
        );
    }
}

export default Header