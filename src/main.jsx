import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import css 
import './index.css'
// import i18n 
import "./i18next.js"
// import store 
import { store } from './Redux/Store.jsx'
// import 'Provider' react-redux 
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
