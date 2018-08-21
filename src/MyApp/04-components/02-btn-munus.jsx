import React from 'react'
import { connect } from 'react-redux'
import { minusOneToCount } from '../03-reduxFiles/02-Actions'
import { store } from '../03-reduxFiles/01-Store'


class ButtonMinus extends React.Component{
    render(){

        const myFunctionMinus = () => {
            store.dispatch(minusOneToCount())
        }

        return(
            <div>
                <button onClick={myFunctionMinus} className="controlButton" >Minus 1</button>
            </div>
        )
    }
}

export default connect(null)(ButtonMinus)