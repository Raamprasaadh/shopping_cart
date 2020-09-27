  import React from 'react';
  import ReactDOM from 'react-dom';
  import ShoppingCart from './shoppingCart'
  import{createStore} from 'redux';
  import Reducers from './reducers';
  import {Provider} from 'react-redux';
  import * as serviceWorker from './serviceWorker';

  const STORE = createStore(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  ReactDOM.render(
    <Provider store={STORE}>
    <ShoppingCart />
    </Provider> ,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
