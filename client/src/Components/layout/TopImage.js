import React from 'react'
import Background from '../../images/badminton5.jpg'

const TopImage = () =>{
  const mainstyle = {
    width: "100%", 
    fontSize: "28px",
    backgroundImage: `url(${Background})`,
    height: "175px",
    padding: "20px",
    textAlign: "center",
    color:"white"
  }
  return(
    
        <div className="main " style={mainstyle}>
            
        </div>
    
  )
}

export default TopImage