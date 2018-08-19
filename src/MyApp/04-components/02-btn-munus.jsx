import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { minusOneToCount } from '../03-reduxFiles/02-Actions'

const dispatchToProps = (dispatch) => {
    return bindActionCreators( { minusOneToCount }, dispatch )
}

class ButtonMinus extends React.Component{
    render(){

        const myFunctionMinus = () => {
            this.props.minusOneToCount()
        }

        return(
            <div>
                <button onClick={myFunctionMinus} className="controlButton" >Minus 1</button>
            </div>
        )
    }
}

export default connect(null, dispatchToProps)(ButtonMinus)