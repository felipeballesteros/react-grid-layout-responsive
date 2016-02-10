import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from './routes';

render(<Router history={createBrowserHistory()}>{routes}</Router>, document.getElementById("app"));