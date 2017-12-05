import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'
import App from './container/App.jsx'
import { BrowserRouter } from 'react-router-dom'

require('./css/index.styl')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('content')
)
