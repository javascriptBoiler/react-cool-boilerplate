import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition,
} from 'react-toasts';

import routes from '../../../routes'

import './layout.scss';

const Layout: React.FC<any> = () => {
    return (
        <div>
            <div className='layout'>
                <Suspense fallback={<div>loading..</div>}>
                    <Switch>
                        {routes.map((route: any, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    render={props => (
                                        <route.component {...props} ToastsStore={ToastsStore} />
                                    )} />
                            ) : (null);
                        })}
                        <Redirect from="/" to="/coming-soon" />
                    </Switch>
                </Suspense>
            </div>


            <ToastsContainer
                position={ToastsContainerPosition.BOTTOM_RIGHT}
                store={ToastsStore}
                lightBackground={false}
            />
        </div>
    )
}

export default Layout;