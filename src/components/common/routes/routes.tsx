import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from '../layout'
import ComingSoon from '../../../pages/comingSoon'

const RouterComponent: React.FC<any> = () => {
    return (
        <Router>
            <Switch>
                {/* other open route witch no need navigation can e placed here */}
                <Route path='/coming-soon'>
                    <ComingSoon />
                </Route>
                <Route path='/'>
                    <Layout />
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterComponent;