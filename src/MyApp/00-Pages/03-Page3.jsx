import React from 'react'
import { store } from '../03-reduxFiles/01-Store'
import { connect } from 'react-redux'
import { addByInput } from '../03-reduxFiles/02-Actions'



const stateReturner = (state) => {
    return state 
}


class Page03 extends React.Component{
    constructor(props) {
        super(props)
        this.state = { number: '' }
    }

    addAmount = () => {
        console.log(" -->  Number to add: ", this.state.number)
        store.dispatch( addByInput( { incrementBy: parseInt( this.state.number, 0 ) } ) )
        this.setState({ number: '' }, () => {
            console.log("Number after clear: ", this.state.number)
        })
    }

    render(){
        let reduxData = store.getState()

        return(
            <div>
                <h1>Increment by:</h1>
                <h3>The Current value: { reduxData.count }</h3>

                <p>Use input and the button below to add any number to current value: (Negative numbers are OK)</p>

                <input value={this.state.number} onChange={ (e) => { this.setState({ number: e.target.value }) } } className="inputIncByInput" type="text" />
                <button onClick={ this.addAmount } >Add to Value</button>
            </div>
        )
    }
}

export default connect(stateReturner)(Page03)
