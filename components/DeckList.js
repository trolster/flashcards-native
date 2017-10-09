import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

class DeckList extends Component {
  render() {
    return <Text>{JSON.stringify(this.props, null, 4)}</Text>;
  }
}

export default connect(state => state)(DeckList);
