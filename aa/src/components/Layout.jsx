import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import CommunityHeader from "./CommunityHeader";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  const isCommunityPage = location.pathname.startsWith("/community");

  return (
    <Container>
      {isCommunityPage ? <CommunityHeader /> : <Header />}
      <Outlet />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
