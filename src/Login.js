import React, {Component} from 'react';
import firebaseApp from "./config/firebase";
import './Assets/Css/Login.css';
import Loading from './Loading/Loadingsvg';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    convertMessage($text) {
       if ($text == 'The email address is badly formatted.'){
            return 'Địa chỉ email bị sai định dạng !';
       }
       else if ($text == 'The password is invalid or the user does not have a password.'){
            return 'Mật khẩu không hợp lệ quý khách vui lòng kiểm tra lại mật khẩu !';
       }
    }

    login(e) {
        e.preventDefault();
        var Lsvg = document.getElementById("Loadingsvg");
        Lsvg.className += " is";

        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
            alert(this.convertMessage(error.message));
            Lsvg.classList.remove("is");
        });
    }

    signup(e){
        e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            let ip = require("ip");
            let dbCon = firebaseApp.database().ref('/users');
            let $rs =  JSON.stringify(u.user); $rs = JSON.parse($rs);
            dbCon.push({
                tokens: $rs.stsTokenManager.accessToken,
                email: this.state.email,
                ipAddress: ip.address(),
                time: new Date().toLocaleString(),
            });

        }).then((u)=>{console.log(u)})
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <main className="">
                <header>Live Chat Xin Chào Quý Khách</header>
                <div className="col-md-push-4 col-md-4 col-sm-6 col-xs-12">
                    <Loading/>
                    <form id="formLogin">
                        <div className="hidden form-group">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#home">Đăng nhập</a></li>
                                <li><a data-toggle="tab" href="#menu1">Đăng ký</a></li>
                            </ul>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" onClick={this.login} className="btn btn-primary">Đăng nhập</button>
                            <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}
export default Login;