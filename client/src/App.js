import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Signup from './Components/auth/Signup'
import Login from './Components/auth/Login'
import TopImage from './Components/layout/TopImage'
import Navbar from './Components/layout/Navbar'

export default class App extends Component {
  render(){
    return (
      
      <BrowserRouter>
        <div className="App">
          <div className="conatiner">
            < TopImage />
            < Navbar />
            < Route path='/login' component={Login} />
            < Route path='/signup' component={Signup} />
            
          </div>
        </div>
      </BrowserRouter>
      
      
      
    )
  }
  
}


