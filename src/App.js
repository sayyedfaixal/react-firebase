import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Component/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginAsVolunteer from "./Component/LoginAsVolunteer";
import Admin from "./Component/Admin";
import { Route, Routes } from "react-router-dom";
import AdminSignUp from "./Component/AdminSignUp";
import Login from "./Component/Login";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<LoginAsVolunteer />} />
        <Route path="/adminSignup" element={<AdminSignUp />} />
        <Route path="/adminLogin" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
