import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from '../pages/landing/index';
import ListMap from '../pages/ListMap/ListMap';
import CreateOrphanages from '../pages/create-orphanages/CreateOrphanage';
import Details from '../pages/Orphanage/Orphanage';
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/list_map" exact component={ListMap}/>
                <Route path="/details_orphanages/:id" exact component={Details}/>
                <Route path="/create_orphanages" exact component={CreateOrphanages}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;