import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DeckListItem } from "./";
import { receiveDecks } from "../actions";
import { getDecks, saveNewDeck } from "../utils/api";

class DeckList extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;

    const data = await getDecks();
    dispatch(receiveDecks(JSON.parse(data)));
  }

  handlePress() {
    alert("Hello");
  }

  render() {
    const decks = Object.keys(this.props.decks);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks</Text>
        <FlatList
          data={Object.keys(this.props.decks)}
          renderItem={DeckListItem}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 30
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(state => state)(DeckList);
