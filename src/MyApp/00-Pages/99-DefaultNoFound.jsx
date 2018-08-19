import React from 'react'

class DefaulNoFoundPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Page Not Found</h1>
                <img src={ require("../01-img/err404.png") } alt=""/>
            </div>
        )
    }
}

export default DefaulNoFoundPage