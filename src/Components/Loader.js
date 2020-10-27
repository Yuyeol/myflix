import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  margin-top: -100px;
  opacity: 0.3;
`;

export default () => (
  <Container>
    {/* 시각장애인도 읽을 수 있게 Loading 표시해줘야함 */}
    <span role="img" aria-label="Loading">
      Loading...
    </span>
  </Container>
);
