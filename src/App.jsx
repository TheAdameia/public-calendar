import './App.css'
import { Routes, Route } from "react-router-dom"
import { Login } from './components/Authorization/Login'
import { Register } from './components/Authorization/Register'
import { ApplicationViews } from './components/views/ApplicationViews'
import { Authorized } from './components/Authorization/Authorized'

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={
        <Authorized>  
          <ApplicationViews/>
        </Authorized>
      } />
    </Routes>
  )
}
