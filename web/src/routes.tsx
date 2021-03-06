import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Landing from './pages/Landing/index'
import OrphanagesMap from './pages/OrphanagesMap/index'
import Orphanage from './pages/CreateOrphanage/index'
import CreateOrphanage from './pages/Orphanage/index'


function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing}/>
                <Route path='/app' component={OrphanagesMap}/>
                <Route path='/orphanages/create' component={Orphanage}/>
                <Route path='/orphanages/:id' component={CreateOrphanage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes