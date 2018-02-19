import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StampListItem from "./StampListItem";
import { Pagination } from "../reusables";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
`;

class StampList extends Component {
  state = { index: 0 };
  render() {
    const { stamps, perPage } = this.props;
    const maxPages = Math.ceil(stamps.length / perPage);
    console.log(maxPages);
    const selectedStamps = stamps.slice(
      this.state.index * perPage,
      this.state.index * perPage + perPage
    );

    if (stamps.length === 0) return <p>No stamps found.</p>;

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
