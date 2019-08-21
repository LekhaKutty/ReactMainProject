import React, { Component } from 'react';

import Axios from 'axios';

import './players.css'

export default class Players extends Component{
    
    constructor(props){
        super(props);
        this.state = {
          players: []
        }
      }
   
    componentDidMount(){
        Axios.get('http://localhost:5000/players')
        .then(res=> {
            
            this.setState({
                players: res.data
            })
        })
        console.log(this.props.Session);
    }
   
    render(){
        let {session,email,login} = this.props.Session;
        console.log(login);
        let playerList = this.state.players.map(player =>{
            return(
                <div className="row" key={player._id}>
                    <div className="col s12 m12">
                        <div className="card darken-3" style={{width:"300px"}}>
                            <div className="card-content">
                                <p style={{textTransform:"capitalize",fontWeight:"bold",fontSize:"20px"}}>{player.firstname}</p>
                                <p style={{textTransform:"capitalize",fontWeight:"bold"}}>{player.lastname}</p>
                                {login === true?  <div>
                                    <p style={{fontWeight:"bold"}}>{player.mobilenumber}</p>
                                    <p style={{fontWeight:"bold",fontSize:"18px"}}>{player.email}</p>
                                </div>: null }
                            </div>
                            {(login === true) && (email !== player.email)? <div className="card-action">
                            <button className="waves-effect waves-light btn-large  indigo darken-4"><i className="material-icons left">send</i>Request Game</button>
                            </div>: null}
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div className = "container" >
                <div className="grid-container" >
                    {playerList}
                    
                   
                </div>
            </div>
            
        )
    }
}