import React from 'react'
import { connect } from 'react-redux'
import { addOneToCount } from '../03-reduxFiles/02-Actions'
import { store } from '../03-reduxFiles/01-Store'


class ButtonPlus extends React.Component{
    render(){

        const myFunctionAdd = () => {
            store.dispatch(addOneToCount())
        }

        return(
            <div>
                <button onClick={myFunctionAdd} className="controlButton" >Plus 1</button>
            </div>
        )
    }
}

export default connect(null)(ButtonPlus)
