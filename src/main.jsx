import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/font/yekan bakh/stylesheet.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Routes/Login.jsx";
import { LoginStep1 } from "./components/LoginStep1.jsx";
import { LoginStep2 } from "./components/LoginStep2.jsx";
import LoginStep3 from "./components/LoginStep3.jsx";
import Dashboard from "./Routes/Dashboard.jsx";
import Managment from "./Routes/Managment.jsx";
import Details from "./Routes/Details.jsx";

import Addproperty from "./Routes/Addproperty.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loginstep1" element={<LoginStep1 />} />
      <Route path="/loginstep2" element={<LoginStep2 />} />
      <Route path="/loginstep3" element={<LoginStep3 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/managment" element={<Managment />} />
      <Route path="/details" element={<Details />} />

      <Route path="/addproperty" element={<Addproperty />} />
      <Route path="*" element={<h1>not found</h1>} />
    </Routes>
  </BrowserRouter>
);
