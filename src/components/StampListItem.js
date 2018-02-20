import React from "react";
import styled from "styled-components";

const Item = styled.div`
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 3px;
  text-align: center;
`;

const StampListItem = ({ stamp }) => {
  return (
    <Item>
      <img src={stamp.imageURL} alt={stamp.title} />
      <p>
        <strong>{stamp.title}</strong>
        <br />
        {stamp.appearDate}
        <br />
        {stamp.author}
      </p>
    </Item>
  );
};

export default StampListItem;
