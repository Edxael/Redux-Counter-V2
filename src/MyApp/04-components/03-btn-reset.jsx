import React from 'react'
import { connect } from 'react-redux'
import { resetCount } from '../03-reduxFiles/02-Actions'
import { store } from '../03-reduxFiles/01-Store'


class ResetButton extends React.Component{
    render(){

        const ResetButton = () => {
            store.dispatch(resetCount())
        }

        return(
            <div>
                <button onClick={ResetButton} className="controlButton" >Reset</button>
            </div>
        )
    }
}

export default connect(null)(ResetButton)