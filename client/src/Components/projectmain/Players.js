import React, { Component } from 'react';

import Axios from 'axios';

import './players.css'

export default class Players extends Component{
    
    constructor(props){
        super(props);
        this.state = {
          players: [],
          modalOpened: false
        }
        this.modalToggle = this.modalToggle.bind(this)
      }
   
    componentDidMount(){
        Axios(`http://localhost:5000/players`, {
            method: "get",
            withCredentials: true
        })
        .then(res=> {
            console.log("players " + res.session);
            this.setState({
                players: res.data
            })
        })
       // console.log(this.props.Session);
    }
    
    modalToggle () {
        this.setState({ modalOpened: !this.state.modalOpened })
    }
   
    render(){

        const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover';
        const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container';
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
                                {login === true  ?  <div>
                                    <p style={{fontWeight:"bold"}}>{player.mobilenumber}</p>
                                    <p style={{fontWeight:"bold",fontSize:"18px"}}>{player.email}</p>
                                </div>: null }
                            </div>
                            {(login === true) && (email !== player.email)? 
                            <div className="card-action">
                                <button className='btn btn-primary' onClick={this.modalToggle}>Request</button>
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
                <div>
                    <div className={containerClass}>
                        <form>
                            <label htmlFor="" >Date & Time</label>
                            <input type="date" name="date" />
                            <div className="input-field">
                                <label htmlFor="location">Location</label>
                                <input type="text" name='location'/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="message" style={{fontSize:"1rem",color:"black"}}>Message</label>
                                <input type="text" name='message'/>
                            </div>
                            <button className="close" >Request
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                    <div className={coverClass} onClick={this.modalToggle}></div>
                </div>
            </div>
                
           
            
        )
    }
}