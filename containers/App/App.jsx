import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import appStyle from './style';
import compose from '../../utils/compose';
import { Route, Switch, Redirect } from 'react-router'
import Home from '../Home';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  )
}

export default compose(
  withStyles(appStyle),
  React.memo
)(App);
