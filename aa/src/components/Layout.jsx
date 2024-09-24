import { Outlet } from 'react-router-dom';
import Header from "./Header";
import styled from "styled-components";

export default function Layout() {
    return (
      <Container>
        <Header />
        <Outlet />
      </Container>
    );
};

const Container = styled.div``;