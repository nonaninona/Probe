import './App.css' 
import { Routes, Route } from 'react-router-dom'
import { HomePage, ChatPage, ArticlePage, MapPage } from './pages/index'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import { ChatRoom } from './pages/ChatRoom'

function App() {
  return (
    <Routes>
      <Route path="/" element ={ <HomePage/> }/>
      <Route path="/chat" element ={ <ChatPage/> }/>
      <Route path="/article" element ={ <ArticlePage/> }/>
      <Route path="/map" element ={ <MapPage/> }/>
      <Route path="/login" element ={ <LoginPage/> }/>
      <Route path="/signup" element ={ <SignUpPage/> }/>
      <Route path="/chatroom/:chatRoomId" element ={ <ChatRoom id='ihh0529'/> }/>
    </Routes>
  )
}

export default App
