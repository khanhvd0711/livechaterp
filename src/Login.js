import React, {Component} from 'react';
import firebaseApp from "./config/firebase";
import './Assets/Css/Login.css';

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

    login(e) {
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            let ip = require("ip");
            let dbCon = firebaseApp.database().ref('/users');
            dbCon.push({
                email: this.state.email,
                // password: this.state.password,
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
                    <form>
                        <div className="form-group">
                            <label>Email address</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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