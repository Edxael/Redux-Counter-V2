import React from 'react'
import { store } from '../03-reduxFiles/01-Store'
import { connect } from 'react-redux'



const stateReturner = (state) => {
    return state 
}


class Page02 extends React.Component{
    render(){
        let reduxData = store.getState()

        return(
            <div>
                <h1>Project Description</h1>

                <p>This page contains a basic example of a counter using Redux.</p>

                <p>Because this component is also suscribed or connected to the store</p>
                <p>Here the value also is: { reduxData.count }</p>


            </div>
        )
    }
}

export default connect(stateReturner)(Page02)
