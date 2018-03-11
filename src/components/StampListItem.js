import React from "react";
import styled from "styled-components";

const Item = styled.a`
  position: relative;
  text-decoration: none;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  color: #777;
  transition: all 0.2s;
  top: 0;

  &:hover {
    top: -0.1rem;
    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-right: 1rem;
  img {
    display: block;
  }
`;

const InfoTextContainer = styled.div`
  flex: 3;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const StampListItem = ({ stamp }) => {
  return (
    <Item href="#">
      <ImageContainer>
        <img src={stamp.imageURL} alt={stamp.title} />
      </ImageContainer>
      <InfoTextContainer>
        <Title>{stamp.title}</Title>
        {stamp.appearDate}
        <br />
        {stamp.author}
      </InfoTextContainer>
    </Item>
  );
};

export default StampListItem;
