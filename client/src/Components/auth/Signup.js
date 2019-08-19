import React, {Component} from 'react';

import Axios from 'axios';

export default class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:true,
            firstname: null,
            lastname:null,
            mobilenumber:null,
            email: null,
            country:null,
            username: null,
            password: null,
            passwordRepeat: null,
            error:false
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
        this.setState({
            isLoading:true
        });
        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            mobilenumber:this.state.mobilenumber,
            email:this.state.email,
            country:this.state.country,
            username:this.state.username,
            password:this.state.password,
            passwordRepeat:this.state.passwordRepeat
        }
        //console.log("gfdgdfg",newUser);
        //console.log(this.state);
        Axios.post('http://localhost:5000/signup', newUser)
            .then(res =>{
                console.log(res.data);
                if(res.err ){
                    this.setState({
                        error:true
                    })
                }else{
                    this.setState({
                        isLoading:true,
                        firstname: null,
                        lastname:null,
                        mobilenumber:null,
                        email: null,
                        country:null,
                        username: null,
                        password: null,
                        passwordRepeat: null,
                        error:false
                    })
                    this.props.history.push(`/login`);
                }

            })
    }    
    render(){
        return(
            <div className="container" style={{ marginTop: "100px",width:"50%"}} >
                <div className="col s6 m6">
                    <div className="card  lighten-5">
                        <div className="card-content black-text">
                            <h5 className="grey-text text-darken-3">Sign Up</h5>
                            <form className="white" onSubmit={this.handleSubmit}>
                                <div className="input-field">
                                    <label htmlFor="firstname" style={{fontSize:"1rem",color:"black"}}>First Name</label>
                                    <input type="text" name='firstname' onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="lastname" style={{fontSize:"1rem",color:"black"}}>Last Name</label>
                                    <input type="text" name='lastname' onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="mobilenumber" style={{fontSize:"1rem",color:"black"}}>Mobile Number</label>
                                    <input type="text"  name='mobilenumber' onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="email" style={{fontSize:"1rem",color:"black"}}>Email</label>
                                    <input type="email" name='email' onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password" style={{fontSize:"1rem",color:"black"}}>Password</label>
                                    <input type="password" name='password' onChange={this.handleChange} />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="passwordRepeat" style={{fontSize:"1rem",color:"black"}}>Repeat Password</label>
                                    <input type="password" name='passwordRepeat' onChange={this.handleChange} />
                                </div>
                                <button className="btn waves-effect waves-light indigo darken-4" style={{ marginTop: "3%"}}>Register
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