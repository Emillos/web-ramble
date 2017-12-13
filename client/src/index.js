import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './components/app'
import reducer from './reducers/reducer'
import './style/style.css'
import 'materialize-css/dist/css/materialize.min.css'

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#root')
);