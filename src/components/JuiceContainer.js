import React from 'react'
import {buyCake, buyJuice, stockJuice} from "../redux";
import {connect} from "react-redux";

function JuiceContainer(props) {
    return(
        <div>
            <h2>Number of juices: {props.numOfJuices}</h2>
            <button onClick={props.buyJuice}>Buy Juice</button>
            <button onClick={props.stockJuice}>Stock Juice</button>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfJuices: state.juice.numOfJuices
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyJuice: () => dispatch(buyJuice()),
        stockJuice: () => dispatch(stockJuice()),
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(JuiceContainer)
