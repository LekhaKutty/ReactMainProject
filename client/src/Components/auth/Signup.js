import React, {Component} from 'react';

import Axios from 'axios';

export default class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: null,
            lastname:null,
            mobilenumber:null,
            email: null,
            country:null,
            username: null,
            password: null,
            passwordRepeat: null,
            password_has_error:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkPassword = this.checkPassword.bind(this)
    }
    handleChange = (e) =>{
        const { name, value } = e.target

        this.setState({
            [name] : value
        },()=>{
            if (name === 'password' || name === 'passwordRepeat')
                this.checkPassword();
        });
    }
    checkPassword = () =>{
        if(!this.state.password || this.state.password !== this.state.passwordRepeat) {
           this.setState({password_has_error:true});
       }
       else {
           this.setState({password_has_error:false});
       }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        
        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            mobilenumber:this.state.mobilenumber,
            email:this.state.email,
            country:this.state.country,
            username:this.state.username,
            password:this.state.password,
        }
        //console.log("gfdgdfg",newUser);
        //console.log(this.state);
        Axios.post('http://localhost:5000/signup', newUser)
            .then(res => console.log(res.data));
    }   
    render(){
        return(
            <div className="container">
            <div class="col s12 m6">
                <div className="card  lighten-5">
                  <div class="card-content black-text">
                    <span class="card-title">Register</span>
                    <form onSubmit={this.handleSubmit}>
                        <input style={{width:"50%"}} type="text" placeholder="First Name" name = "firstname" onChange={this.handleChange}/>
                        <br></br>
                        <input style={{width:"50%"}} type="text" placeholder="Last Name" name = "lastname" onChange={this.handleChange}/>
                        <br></br>
                        <input style={{width:"50%"}} type="text" placeholder="Mobile Number" name = "mobilenumber" onChange={this.handleChange}/>
                        <br></br>
                        <input style={{width:"50%"}} type="email" placeholder="Email" name = "email" onChange={this.handleChange}/>
                        <br></br>
                        <input style={{width:"50%"}} type="text" placeholder="Country" name = "country" onChange={this.handleChange}/>
                        <br></br>
                        <input style={{width:"50%"}} type="text" placeholder="Username" name = "username" onChange={this.handleChange}/>
                        <br></br>
                        <input style={{width:"50%"}} type="password" placeholder="********" name = "password" onChange={this.handleChange}/>
                        <br></br>
                        <input style={{width:"50%"}} type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" onChange={this.handleChange}/>
                        <br></br>
                        <button class="btn waves-effect waves-light indigo darken-4">Register
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