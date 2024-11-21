import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Auth";
import UserData from "../pages/User/UserData";
import UserNickName from "../pages/User/UserNickName";
import UserPetData from "../pages/User/UserPetData";
import Main from "../pages/Main";
import MissingMain from "../pages/Missing/Main";
import MissingView from "../pages/Missing/View";
import MissingCreate from "../pages/Missing/Create";
import CommunityMain from "../pages/Community/Main";
import CommunityView from "../pages/Community/View";
import CommunityCreate from "../pages/Community/Create";

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
          <Route path="/missingmain" element={<MissingMain />} />
          <Route path="/missingview" element={<MissingView />} />
          <Route path="/missingcreate" element={<MissingCreate />} />
          <Route path="/communitymain" element={<CommunityMain />} />
          <Route path="/communityview" element={<CommunityView />} />
          <Route path="/communitycreate" element={<CommunityCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}