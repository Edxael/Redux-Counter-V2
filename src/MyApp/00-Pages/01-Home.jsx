import React from 'react'
import { store } from '../03-reduxFiles/01-Store'
import { connect } from 'react-redux'

import ButtonP1 from '../04-components/01-btn-plus'
import ButtonM1 from '../04-components/02-btn-munus'
import ButtonR1 from '../04-components/03-btn-reset'

const linkStateProps = (state) => {
    return { myPropsData: state }
}

class Home extends React.Component{
    render(){

        let reduxData = store.getState()
        console.log("The Value: ", reduxData.count)

        return(
            <div>
                <h1>Redux Counter Example.</h1>

                <hr className="HomerHR1" />
                <h3>Counter Value: { reduxData.count }</h3>
                <hr className="HomerHR1" />

                <div className="buttonsContainer" >
                    <ButtonP1 />
                    <ButtonM1 />
                    <ButtonR1 />
                </div>
                
            </div>
        )
    }
}

export default connect(linkStateProps)(Home)
