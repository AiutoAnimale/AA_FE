import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import styled from "styled-components";

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