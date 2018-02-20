import React, { Component } from "react";
import axios from "axios";

import { Container, Heading } from "./reusables";
import { converStampCSVtoJSON } from "./helpers/CSV";
import StampList from "./components/StampList";

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
          <Heading>Postimerkit</Heading>

          <StampList stamps={this.state.stamps} perPage={6 * 6} />
        </Container>
      </div>
    );
  }
}

export default App;
