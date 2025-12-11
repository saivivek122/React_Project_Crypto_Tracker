import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import HomePage from "./pages/Home"
import DashboardPage from "./pages/Dashboard"
import CoinPage from "./pages/Coin"
import ComparePage from "./pages/ComparePage"
import WatchListPage from "./pages/WatchListPage"
import CryptoFallback from "./components/Common/FallBack"
import {ToastContainer} from "react-toastify"
import { useState } from "react"
function App() {
 
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
        <Route path="/compare" element={<ComparePage/>}/>
        <Route path="/watchList" element={<WatchListPage/>}/>
      </Routes>
  
      </BrowserRouter>
     
      
    </div>
  )
}

export default App
