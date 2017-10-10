import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DeckItem = ({ deck }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="cards-outline" size={170} />
      <Text>{deck.title}</Text>
    </View>
  );
};

class DeckList extends Component {
  render() {
    const decks = Object.keys(this.props.decks);
    if (decks.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Decks</Text>
          {decks.map(deck => (
            <DeckItem key={deck} deck={this.props.decks[deck]} />
          ))}
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
  }
});

export default connect(state => state)(DeckList);
