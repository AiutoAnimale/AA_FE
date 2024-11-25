import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MissingHeader from "../components/MissingHeader";

export default function MissingLayout() {
  const location = useLocation();
  return (
    <Container>
      <MissingHeader />
      <Outlet />
    </Container>
  );
}

const Container = styled.div``;
