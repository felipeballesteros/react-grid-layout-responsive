import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './components/AppContainer';
import Index from './components/Index';
import Arts from './components/content/Arts';
import News from './components/content/News';
import Sports from './components/content/Sports';
import Story from './components/content/Story';
import NotFound from './components/NotFound';

export default (
    <Route path='/' component={AppContainer}>
        <IndexRoute component={Index} />
        <Route path="arts" component={Arts} />
        <Route path="news" component={News} />
        <Route path="sports" component={Sports} />
        <Route path="arts/:title/:id" component={Story} />
        <Route path="news/:title/:id" component={Story} />
        <Route path="sports/:title/:id" component={Story} />
        <Route path="*" component={NotFound} />
    </Route>
);