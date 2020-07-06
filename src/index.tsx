
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from 'modules';

import { BrowserRouter as Router } from 'react-router-dom';
import { check, tempSetUser } from 'modules/user';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const loadUser = () => {
  try {
    const user = localStorage.getItem('user');
    if (!user) {
      console.log('undefined user info');
      return //  로그인 상태가 아니라면 아무것도 안함
    }
    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (error) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
