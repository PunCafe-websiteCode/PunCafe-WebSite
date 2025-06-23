import React from "react";
import Navbar from "./components/Navbar";
import ProfileWebS from "./jsx/ProfileWebS";
import LogInToWebS from "./jsx/LogInToWebS";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders } from "./pages";

const WebS = () => {
  // const isOwnerPath = useLocation().pathname.includes("/owner");
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/Orders' element={<Orders />} />
        </Routes>
    </Router>
    
    </>
  )
}
export default WebS