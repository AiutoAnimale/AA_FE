import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Auth";
import UserData from "../pages/User/UserData";
import UserNickName from "../pages/User/UserNickName";
import UserPetData from "../pages/User/UserPetData";
import Main from "../pages/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signupData" element={<UserData />} />
        <Route path="/signupNick" element={<UserNickName />} />
        <Route path="/signupPet" element={<UserPetData />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}