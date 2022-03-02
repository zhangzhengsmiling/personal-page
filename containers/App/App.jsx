import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import appStyle from './style';
import compose from '../../utils/compose';
import { Route, Switch } from 'react-router'
import Home from '../Home';
import About from '../About';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  )
}

export default compose(
  withStyles(appStyle),
  React.memo
)(App);
