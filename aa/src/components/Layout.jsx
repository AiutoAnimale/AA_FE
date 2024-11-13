import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

const Container = styled.div``;