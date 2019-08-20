import React, { Component } from 'react';

import Axios from 'axios';

let gridStyle = {
    display: "grid",
    marginLeft:"20%",
    gridGap: "50px",
    gridTemplateColumns: "auto auto auto",
    padding: "10px"
}
/*let griditemStyle ={
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "2px",
    fontSize: "18px",
    textAlign: "center"
}
*/
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
        const playerList = this.state.players.map(player =>{
            return(
                <div className="row" key={player._id}>
                    <div className="col s12 m12">
                        <div className="card darken-3" >
                            <div className="card-content">
                                <p style={{textTransform:"capitalize",fontWeight:"bold",fontSize:"20px"}}>{player.firstname}</p>
                                <p style={{textTransform:"capitalize",fontWeight:"bold"}}>{player.lastname}</p>
                                {login === true?  <div>
                                    <p style={{fontWeight:"bold"}}>{player.mobilenumber}</p>
                                    <p style={{fontWeight:"bold",fontSize:"18px"}}>{player.email}</p>
                                </div>: null }
                               
                               
                            </div>
                            <div className="card-action">
                            <a className="waves-effect waves-light btn-large  indigo darken-4"><i className="material-icons left">send</i>Request Game</a>
                            </div>

                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div className = "container" style={{marginleft:"15%"}}>
                <div className="grid-container" style={gridStyle}>
                    {playerList}
                    
                   
                </div>
            </div>
            
        )
    }
}