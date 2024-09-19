import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { HomePage, ChatPage, ArticlePage, MapPage } from './pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element ={ <div> 메인페이지 </div> }/>
      <Route path="/chat" element ={ <div> 챗 </div> }/>
      <Route path="/article" element ={ <div> 아티클 </div> }/>
      <Route path="/map" element ={ <div> 지도 </div> }/>
    </Routes>
  )
}

export default App
