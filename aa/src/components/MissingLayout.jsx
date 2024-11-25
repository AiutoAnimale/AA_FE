import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import MissingHeader from "../components/MissingHeader";

export default function MissingLayout() {
  const location = useLocation();

  return (
    <Container>
      {location.pathname !== "/missingview" &&
        location.pathname !== "/missingcreate" && <MissingHeader />}
      <Outlet />
    </Container>
  );
}

const Container = styled.div``;
