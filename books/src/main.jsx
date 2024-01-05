// ^ importing required components
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Utils/Redux/store.js'

// ^ creating root, which will render in the root div
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* wrapping BrowserRouter, for the whole file, so routing can be done */}
  <BrowserRouter>

  {/* wrapping Provider, for the whole React Component */}
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
  </>
)
