import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetCount } from '../03-reduxFiles/02-Actions'

const dispatchToProps = (dispatch) => {
    return bindActionCreators( { resetCount }, dispatch )
}

class ResetButton extends React.Component{
    render(){

        const ResetButton = () => {
            this.props.resetCount()
        }

        return(
            <div>
                <button onClick={ResetButton} className="controlButton" >Reset</button>
            </div>
        )
    }
}

export default connect(null, dispatchToProps)(ResetButton)