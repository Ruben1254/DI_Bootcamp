import React from "react"


class ClickMe extends React.Component  {
    constructor(){
        super()
        this.state = {isToggleOn: true}
    }
    render(){
        const alertClick = () => alert("I was clicked")


        const handleKeyPress = (e) => {
            if(e.key === "Enter"){
                e.preventDefault()
                alert(`Then Enter key was pressed, your input is: ${e.target.value}`)
            }
        }
        return(
            <div>
                <button onClick={alertClick}>Click me</button><br/>
                <input type="text" onKeyPress={handleKeyPress}  placeholder="press the Enter Key" /><br/>
                <button onClick={() => this.setState(prevState => ({
                    isToggleOn: !prevState.isToggleOn
    })) }>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
    </button>
            </div>
        )}
}

export default ClickMe
