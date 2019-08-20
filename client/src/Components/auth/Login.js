import React, {Component} from 'react';

import Axios from 'axios';

export default class Login extends Component{
    constructor() {
        super()
        this.state = {
          email: '',
          password: '',
          error: false,
          errmessage:''
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
        //console.log(e);
        const loginUser = {
          email:this.state.email,
          password:this.state.password
        }
        Axios.post('http://localhost:5000/login',loginUser)
            .then(res => {
              //session Id is sending to parent component 
              this.props.handleSessionID(res.data.sessionId,res.data.email);

              this.props.history.push('/')

            });
    }
         
    render(){
        return(
            <div className="container" style={{ marginTop: "100px",width:"45%"}}>
            <div className="col s12 m6" >
                <div className="card  lighten-5">
                  <div className="card-content black-text">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <form className="white" onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="email" style={{fontSize:"1rem",color:"black"}}>Email</label>
                            <input type="email" name="email" onChange={this.handleChange} />
                        </div>
                       
                        <div className="input-field">
                            <label htmlFor="password" style={{fontSize:"1rem",color:"black"}}>Password</label>
                            <input type="password" name='password' onChange={this.handleChange} />
                        </div>
                        <button className="btn waves-effect waves-light indigo darken-4" style={{ marginTop: "3%"}}>Login
                            <i className="material-icons right">send</i>
                        </button>
                        
                    </form>
                  </div>
                </div>
            </div>
            </div>
        )
    }
}