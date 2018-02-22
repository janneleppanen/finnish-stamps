import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStamps } from "./actions/StampsActions";
import { Container, Heading } from "./reusables";
import StampList from "./components/StampList";

class App extends Component {
  componentDidMount() {
    this.props.fetchStamps();
  }

  render() {
    const { stamps } = this.props;

    return (
      <div>
        <Container>
          <Heading>Postimerkit</Heading>

          <StampList stamps={stamps} perPage={6 * 6} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ stamps }) => {
  return {
    stamps
  };
};

export default connect(mapStateToProps, { fetchStamps })(App);
