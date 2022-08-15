import React from "react";
import {connect} from "react-redux"
import { increase, decrease } from "../actions";

const Compteur = (props) => {
    <>
    <button onClick={increase}>+</button>
    <span>{props.compte}</span>
    <button onClick={decrease}>-</button>
    </>
}

const stateToProps = (state) => {
    return {
        compte: state.counter
    }
}



export default connect(stateToProps)(Compteur)