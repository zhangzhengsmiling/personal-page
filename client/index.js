import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../common/store';
import App from '../containers/App/App';
import StyleContext from 'isomorphic-style-loader/StyleContext';
// import RequestContext from '../common/context/request-context';

const insertCss = () => {}
ReactDom.render(
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </StyleContext.Provider>,
  document.getElementById('root')
)
