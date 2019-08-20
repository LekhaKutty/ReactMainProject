import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Background from './images/headerback.jpg';
import Signup from './Components/auth/Signup';
import Login from './Components/auth/Login';
import Navbar from './Components/layout/Navbar';

import Axios from 'axios';
import Sidebar from './Components/layout/Sidebar';

let imagestyle = {
  width: "100%", 
  fontSize: "28px",
  backgroundImage: `url(${Background})`,
  height: "175px",
  padding: "20px",
  textAlign: "center",
  color:"white"
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      session: '',
      login: false
    }
  }
  handlehereSessionId = (sessionId) =>{
    console.log("From parent " + sessionId);
    if(sessionId){
      const id = sessionId
      this.setState({
        session: id,
        login: true
      })
      //console.log(this.state)
    }else{
      //console.log(this.state)
    }
  }
  handleLogOut = () =>{
    this.setState({
      session: '',
      login: false
    })
  }
  render(){
    return (
      
      <BrowserRouter>
        <div className="App">
            <div style={imagestyle}>
              <h1 className="center" >Badminton Gaming</h1>
            </div>
            < Navbar propslogin={this.state} logout={this.handleLogOut}/>
            < Sidebar />
            < Route 
                path='/login' 
                render={(props) => <Login {...props} handleSessionID={this.handlehereSessionId} />}
            />
            < Route path='/signup' component={Signup} />
            < Route path='/logout' />
            
        </div>
      </BrowserRouter>
      
      
      
    )
  }
  
}


