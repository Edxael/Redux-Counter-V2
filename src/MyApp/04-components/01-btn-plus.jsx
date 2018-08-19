import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addOneToCount } from '../03-reduxFiles/02-Actions'

const dispatchToProps = (dispatch) => {
    return bindActionCreators( { addOneToCount }, dispatch )
}

class ButtonPlus extends React.Component{
    render(){

        const myFunctionAdd = () => {
            this.props.addOneToCount()
        }

        return(
            <div>
                <button onClick={myFunctionAdd} className="controlButton" >Plus 1</button>
            </div>
        )
    }
}

export default connect(null, dispatchToProps)(ButtonPlus)
