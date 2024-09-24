import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth";
import Signup from "../pages/User";
import Community from "../pages/Community";
import Main from "../pages/Main";
import Missing from "../pages/Missing";
import Knowing from "../pages/Knowing";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/community" element={<Community />} />
        <Route path="/main" element={<Main />} />
        <Route path="/missing" element={<Missing />} />
        <Route path="/knowing" element={<Knowing />} />
      </Routes>
    </BrowserRouter>
  );
}