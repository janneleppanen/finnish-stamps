import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function generateSteps(current, spread, max) {
  let smallest = current - spread;
  let biggest = current + spread;
  let steps = [];

  if (smallest < 0) {
    biggest += Math.abs(smallest);
    smallest = 0;
  }
  if (biggest > max) {
    smallest -= Math.abs(biggest - max);
    biggest = max;
  }

  for (let i = smallest; i <= biggest; i++) {
    steps.push(i);
  }
  return steps;
}

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  text-align: center;
`;

const Step = styled.button`
  display: inline-block;
  padding: 0.325rem;
  margin: 0.125rem;
  transition: background 0s;
  min-width: 2.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 3px;

  :hover,
  :focus {
    outline: none;
    border-color: tomato;
    color: tomato;
  }

  &.step--current {
    background: tomato;
    color: white;
  }

  &.disabled {
    color: #888;
    pointer-events: none;
  }
`;

const Dots = styled.span`
  display: inline-block;
  color: #888;
  padding: 0.25rem;
  width: 2.5rem;
  pointer-events: none;
`;

const Quick = styled.span`
  &.hidden {
    visibility: hidden;
  }
`;

class Pagination extends Component {
  renderSteps() {
    const { currentIndex, maxPages, onChange, spread } = this.props;

    return generateSteps(currentIndex, spread, maxPages - 1).map(i => {
      const classes = currentIndex === i ? "step step--current" : "step";
      return (
        <Step key={i} className={classes} onClick={e => onChange(i)}>
          {i + 1}
        </Step>
      );
    });
  }

  render() {
    const { currentIndex, maxPages, onChange, spread } = this.props;
    const showQuickStart = currentIndex - spread - 1 > 0;
    const showQuickEnd = currentIndex + spread + 1 < maxPages;

    return (
      <Wrapper>
        <Step
          className={currentIndex === 0 ? "disabled" : ""}
          onClick={this.onPrevClick.bind(this)}
        >
          Edellinen
        </Step>

        <Quick className={showQuickStart ? null : "hidden"}>
          <Step onClick={e => onChange(1)}>1</Step>
          <Dots>...</Dots>
        </Quick>

        {this.renderSteps()}

        <Quick className={showQuickEnd ? null : "hidden"}>
          <Dots>...</Dots>
          <Step onClick={e => onChange(maxPages - 1)}>{maxPages}</Step>
        </Quick>

        <Step
          className={currentIndex === maxPages - 1 ? "disabled" : ""}
          onClick={this.onNextClick.bind(this)}
        >
          Seuraava
        </Step>
      </Wrapper>
    );
  }

  onNextClick() {
    const { currentIndex, maxPages, onChange } = this.props;
    if (currentIndex + 1 < maxPages) onChange(currentIndex + 1);
  }

  onPrevClick() {
    const { currentIndex, onChange } = this.props;
    if (currentIndex - 1 >= 0) onChange(currentIndex - 1);
  }
}

Pagination.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  spread: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

Pagination.defaultProps = {
  spread: 2
};

export default Pagination;
