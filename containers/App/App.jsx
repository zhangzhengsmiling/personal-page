import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import appStyle from './style';
import compose from '../../utils/compose';
import { Route, Switch } from 'react-router-dom'
import Home from '../Home';

const App = () => {
  return (
    <div>
      <Route path="/home" component={Home} />
    </div>
  )
}

export default compose(
  withStyles(appStyle),
  React.memo
)(App);
