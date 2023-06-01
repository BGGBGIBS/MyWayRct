import { useState } from 'react'
import './App.css'
import DemoAjax from './containers/demo-ajax/demo-ajax'
import NavBar from './components/nav-bar/nav-bar'
import Footer from './components/footer/footer'
import Topper from './components/topper/topper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
    </>
  )
}

export default App
