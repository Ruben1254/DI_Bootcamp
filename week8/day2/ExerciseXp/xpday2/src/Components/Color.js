import React from "react";

class Color extends React.Component{
    constructor(){
        super()
        this.state = {
            favoriteColor: "red"
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => this.setState({favoriteColor: "yellow"}), 5000 )
    }


    render(){
        return(
            <div>
            <h2>My Favorite Color is {this.state.favoriteColor}</h2>
            <button onClick={() => this.setState({favoriteColor: "blue"})}>favoriteColor to blue</button>
            </div>
        )
    
    }

}

export default Color 