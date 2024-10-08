import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Auth";
import Signup from "../pages/User";
import Community from "../pages/Community";
import Main from "../pages/Main";
import Missing from "../pages/Missing";
import Knowing from "../pages/Knowing";
import Info from "../pages/Info";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/missing" element={<Missing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/knowing" element={<Knowing />} />
          <Route path="/info" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}