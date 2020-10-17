import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from '../pages/landing/index';
import ListMap from '../pages/ListMap/ListMap';
import CreateOrphanages from '../pages/create-orphanages/CreateOrphanage';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/list_map" exact component={ListMap}/>
                <Route path="/create_orphanages" exact component={CreateOrphanages}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;