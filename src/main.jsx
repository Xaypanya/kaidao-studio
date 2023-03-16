import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

console.log('%cຢ່າໆໆ!', 'color: red; font-size: 30px; font-weight: bold;');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
