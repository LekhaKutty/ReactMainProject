import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Signup from './Components/auth/Signup'
import Login from './Components/auth/Login'
import TopImage from './Components/layout/TopImage'
import Navbar from './Components/layout/Navbar'
import Axios from 'axios';

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
          <div className="conatiner">
            
            < TopImage />
            < Navbar propslogin={this.state}/>
            < Route 
                path='/login' 
                
                render={(props) => <Login {...props} handleSessionID={this.handlehereSessionId} />}
            />
            < Route path='/signup' component={Signup} />
            < Route path='/logout' />
            
          </div>
        </div>
      </BrowserRouter>
      
      
      
    )
  }
  
}


