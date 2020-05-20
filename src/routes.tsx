import React from 'react';

const Contact = React.lazy(() => import('./pages/contact'))

const routes = [
    { path: '/contact-us', exact: true, name: 'Setting', component: Contact },
];

export default routes;
