import { useState } from 'react'
import './App.css' 
import { Routes, Route, Link } from 'react-router-dom'
import { HomePage, ChatPage, ArticlePage, MapPage } from './pages/index'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/" element ={ <HomePage/> }/>
      <Route path="/chat" element ={ <ChatPage/> }/>
      <Route path="/article" element ={ <ArticlePage/> }/>
      <Route path="/map" element ={ <MapPage/> }/>
      <Route path="/login" element ={ <LoginPage/> }/>
    </Routes>
  )
}

export default App
