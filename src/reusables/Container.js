import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: auto;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1000px;
`;

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Container;
