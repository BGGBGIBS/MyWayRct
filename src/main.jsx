import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Footer from './components/footer/footer'
import Topper from './components/topper/topper'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Topper/>
    <App/>
    <Footer/>
  </React.StrictMode>,
)
