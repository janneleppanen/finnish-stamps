import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StampListItem from "./StampListItem";
import { Pagination } from "../reusables";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

class StampList extends Component {
  state = { index: 0 };
  render() {
    const { stamps, perPage } = this.props;
    const maxPages = Math.ceil(stamps.length / perPage);

    const selectedStamps = stamps.slice(
      this.state.index * perPage,
      this.state.index * perPage + perPage
    );

    if (stamps.length === 0)
      return <p>Postimerkit ovat hukassa. Hetkinen...</p>;

    return (
      <div>
        <Pagination
          currentIndex={this.state.index}
          maxPages={maxPages}
          onChange={index => this.setState({ index })}
        />

        <Wrapper>
          {selectedStamps.map(stamp => (
            <StampListItem key={stamp.id} stamp={stamp} />
          ))}
        </Wrapper>

        <Pagination
          currentIndex={this.state.index}
          maxPages={maxPages}
          onChange={index => this.setState({ index })}
        />
      </div>
    );
  }
}

StampList.propTypes = {
  stamps: PropTypes.array.isRequired,
  perPage: PropTypes.number,
  pageIndex: PropTypes.number
};

StampList.defaultProps = {
  perPage: 12
};

export default StampList;
