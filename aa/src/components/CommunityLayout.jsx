import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import CommunityHeader from "../components/CommunityHeader";

export default function CommunityLayout() {
  const location = useLocation();

  return (
    <Container>
      <CommunityHeader />
      <Outlet />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
