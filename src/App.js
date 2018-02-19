import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import { Container } from "./reusables";
import { converStampCSVtoJSON } from "./helpers/CSV";
import StampList from "./components/StampList";

const Title = styled.h1`
  text-align: center;
`;

class App extends Component {
  state = { stamps: [] };

  componentDidMount() {
    axios.get("/data/postimerkit2014.csv").then(res => {
      this.setState({ stamps: converStampCSVtoJSON(res.data) });
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Title>Finnish Stamps</Title>

          <StampList stamps={this.state.stamps} perPage={6 * 6} />
        </Container>
      </div>
    );
  }
}

export default App;
