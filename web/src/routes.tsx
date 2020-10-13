import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Landing from './pages/Landing/index'
import Orphanage from './pages/Orphanage/index'


function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing}/>
                <Route path='/orphanage' component={Orphanage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes