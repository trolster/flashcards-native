import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DeckListItem } from "./";

class DeckList extends Component {
  handlePress() {
    alert("Hello");
  }
  render() {
    const decks = Object.keys(this.props.decks);
    if (decks.length) {
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
    return <Text>Create the first deck of flashcards!</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    fontSize: 50
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  deckListItemContainer: {
    backgroundColor: "#e53224",
    borderRadius: 10,
    marginBottom: 15,
    width: 300
  },
  icon: {
    color: "white"
  },
  deckTitle: {
    fontSize: 50,
    color: "white",
    marginTop: -40,
    marginBottom: 10,
    backgroundColor: "transparent"
  }
});

export default connect(state => state)(DeckList);
