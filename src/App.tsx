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
      <Route path="/" element ={ <HomePage></HomePage> }/>
      <Route path="/chat" element ={ <ChatPage></ChatPage> }/>
      <Route path="/article" element ={ <ArticlePage></ArticlePage> }/>
      <Route path="/map" element ={ <MapPage></MapPage> }/>
    </Routes>
  )
}

export default App
