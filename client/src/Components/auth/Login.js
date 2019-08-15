import React, {Component} from 'react';

import Axios from 'axios';

export default class Login extends Component{
    constructor() {
        super()
        this.state = {
          email: '',
          password: '',
          errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) =>{
        const { name, value } = e.target

        this.setState({
            [name] : value
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        const loginUser = {
            email:this.state.email,
            password:this.state.password
        }
        Axios.post('http://localhost:5000/login',loginUser)
            .then(res => console.log(res.data));
    }
    render(){
        return(
            <div className="container">
            <div class="col s12 m6">
                <div className="card  lighten-5">
                  <div class="card-content black-text">
                    <span class="card-title">Login</span>
                    <form class="noform" onSubmit={this.handleSubmit}>
                        <input style={{width:"50%"}} type="email" placeholder="Email" name = "email" onChange={this.handleChange}/>
                        <br></br>
                        <input style={{width:"50%"}} type="password" placeholder="********" name = "password" onChange={this.handleChange}/>
                        <br></br>
                        <button class="btn waves-effect waves-light indigo darken-4">Login
                            <i class="material-icons right">send</i>
                        </button>
                        
                    </form>
                  </div>
                </div>
                </div>
            </div>
        )
    }
}