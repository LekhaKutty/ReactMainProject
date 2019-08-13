import React, {Component} from 'react';
//import {register} from './UseAxios';
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
            password: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
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
            password:this.state.password
        }
        console.log("gfdgdfg",newUser);
        //console.log(this.state);
        Axios.post('http://localhost:5000/signup', {firstname: this.state.firstname,
        lastname: this.state.lastname,
        mobilenumber:this.state.mobilenumber,
        email:this.state.email,
        country:this.state.country,
        username:this.state.username,
        password:this.state.password})
            .then(res => console.log(res.data));
    }   
    render(){
        return(
            <div>
                <h3>Register</h3>
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
                    <input style={{width:"50%"}} type="password" placeholder="Password" name = "password" onChange={this.handleChange}/>
                    <button>Register</button>
                </form>
            </div>
            
        )
    }
}