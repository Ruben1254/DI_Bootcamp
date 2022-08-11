import React from "react";
import ima from "../assets/ima.jpg"
import "./Exercise4.css"

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise4 = () => {

    return(
        <div>
            <h1 style={style_header}>This is a Header</h1>
            <p className='para'>This is a paragraph</p>
            <a href='google.com'>This is a link</a>
            <form>
                <h2>This a Form</h2>
                <label>Enter your name:<br />
                <input type='text'/>
                <input type='submit' />
                </label>
            </form>
            <h3>Here is an Image:</h3>
            <img src={ima.jpg} alt='reactim' />
            <ul>
                <h4>This is a List:</h4>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    )
}

export default Exercise4