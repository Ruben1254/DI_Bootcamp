import React from "react"
import Garage from "./Garage"

class Car extends React.Component {
   constructor(){
    super()
    this.state = {
        color: "red"
    }
   }
    render(props){
        return(
           <div>
                <h1>This car is {this.state.color} {this.props.carModel}</h1>
                <Garage size="small" />    
           </div>
        )
    }
}

export default Car