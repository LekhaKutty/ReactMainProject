import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Background from './images/headerback.jpg';
import Signup from './Components/auth/Signup';
import Login from './Components/auth/Login';
import Navbar from './Components/layout/Navbar';
import Sidebar from './Components/layout/Sidebar';
import Players from './Components/projectmain/Players';

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
      email:'',
      login: false
    }
  }
 
  handlehereSessionId = (sessionId,email) =>{
    console.log("From parent " + sessionId + email);
    if(sessionId){
      const id = sessionId
      this.setState({
        session: id,
        email:email,
        login: true
      })
      
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
            <Switch>
              < Route exact path='/' />
              < Route 
                  path='/login' 
                  render={(props) => <Login {...props} handleSessionID={this.handlehereSessionId} />}
              />
              < Route path='/signup' component={Signup} />
              < Route path='/logout' />
              < Route 
                  path='/players'
                  render={(props) => <Players {...props} Session={this.state} />}
              />
            </Switch>
            
        </div>
      </BrowserRouter>
      
      
      
    )
  }
  
}


