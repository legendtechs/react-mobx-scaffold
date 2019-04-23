import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import App from '../components/app';
import RoutesConfig from './config';
import RouteWithSubRoutes from './routeWithSubRoute';
import page404 from '../components/Page404';

const router = (
  <HashRouter>
    <App>
      <Switch>
        {RoutesConfig.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Redirect from='/' to='/demo' />
        <Route component={page404}></Route>
      </Switch>
    </App>
  </HashRouter>
);
export default router;
