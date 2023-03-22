import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Component/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginAsVolunteer from "./Component/LoginAsVolunteer";
import LoginAsAdmin from "./Component/LoginAsAdmin";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<LoginAsVolunteer />} />
        <Route path="/admin" element={<LoginAsAdmin />} />
      </Routes>
    </>
  );
}

export default App;
