import React from "react";
import {connect} from "react-redux"
import { increase, decrease } from "../actions/index";

const Counter = (props) => {
    return(
    <>
        <button onClick={props.i}>+</button>
        <span>{props.compte}</span>
        <button onClick={props.d}>-</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        compte: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        i: () => dispatch(increase()),
        d: () => dispatch(decrease())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)