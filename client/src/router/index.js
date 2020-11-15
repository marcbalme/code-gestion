import { Switch, Route } from 'react-router-dom';
import CustomerPage from '../pages/customer';
import DasboardPage from '../pages/dashboard';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import NewAccountPage from '../pages/newAccount';
import SessionPage from '../pages/session';
import {
  ROUTE_CUSTOMERS,
  ROUTE_DASHBOARD,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_NEW_ACCOUNT,
  ROUTE_SESSIONS,
} from './routes';

const RouterSetUp = () => {
  return (
    <Switch>
      <Route path={ROUTE_HOME} exact component={HomePage} />
      <Route path={ROUTE_LOGIN} component={LoginPage} />
      <Route path={ROUTE_NEW_ACCOUNT} component={NewAccountPage} />
      <Route path={ROUTE_DASHBOARD} component={DasboardPage} />
      <Route path={ROUTE_CUSTOMERS} component={CustomerPage} />
      <Route path={ROUTE_SESSIONS} component={SessionPage} />
    </Switch>
  );
};

export default RouterSetUp;
