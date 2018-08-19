import React from 'react'
import '../02-css/style.css'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

    // Redux things
import { Provider } from 'react-redux'
import { store } from '../03-reduxFiles/01-Store'

    // Importing Pages
import HomePage from './01-Home'
import Page02 from './02-Page2'
import DefaultNoFound from './99-DefaultNoFound'


class Main extends React.Component{
    render(){
        return(
            <Provider store={ store } >
                <HashRouter>
                    <div className="mainContainer">

                        <div className="menuContainer">
                            <Link className="menuLink" to="/" >Home</ Link>
                            <Link className="menuLink" to="/2" >Description</ Link>
                        </div>

                        <hr/>

                        <div className="switchContainer" >
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route path="/2" component={Page02} />
                                <Route component={DefaultNoFound} />
                            </Switch>
                        </div>

                        <hr/>

                        <div className="footerContainer">
                            <div>By: Edmundo Rubio</div>
                        </div>

                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

export default Main 