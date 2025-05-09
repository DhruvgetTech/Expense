import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import SideBar from "./components/SideBar"
import HomeDeshbord from "./components/HomeDeshbord"
import Income from "./pages/Income"
import Expense from "./pages/Expense"

function App() {

  return (
    <>
   
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/dashbord" element={<Dashboard/>}/>
      <Route path="/Side" element={<SideBar/>}/>
      <Route path="/income" element={<Income/>}/>
      <Route path="/expense" element={<Expense/>}/>
    </Routes>
     
    </>
  )
}

export default App
