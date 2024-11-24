import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import CommunityHeader from "../components/CommunityHeader";

export default function MissingLayout() {
  const location = useLocation();
  return (
    <Container>
      <CommunityHeader />
      <Outlet />
    </Container>
  );
}

const Container = styled.div``;
