import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text
} from "react-native";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tolower from "lodash.tolower";
import { receiveDecks } from "../actions";
import { getDecks, saveNewDeck } from "../utils/api";

class DeckList extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;

    const data = await getDecks();
    dispatch(receiveDecks(JSON.parse(data)));
  }

  handlePress = title => {
    const deckId = tolower(title);
    this.props.navigation.navigate("Deck", { deckId });
  };

  render() {
    if (this.props.decks === null) {
      return (
        <View style={styles.container}>
          <Text>There are currently no decks in your app.</Text>
          <Text>Add a new deck by selecting "New Deck" below.</Text>
        </View>
      );
    }
    const decks = Object.keys(this.props.decks);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks</Text>
        <FlatList
          data={Object.keys(this.props.decks)}
          renderItem={({ item: title }) => {
            const questions = this.props.decks[title].questions.length;
            return (
              <TouchableOpacity
                style={styles.deckListItemContainer}
                onPress={() => this.handlePress(title)}
              >
                <Text style={styles.deckTitle}>{title}</Text>
                <Text style={{ color: "white" }}>
                  {this.props.decks[title].questions.length}{" "}
                  {questions === 1 ? "Card" : "Cards"} in the Deck
                </Text>
              </TouchableOpacity>
            );
          }}
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
  },
  deckListItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 5,
    marginTop: 15,
    width: 240,
    height: 70
  },
  deckTitle: {
    fontSize: 25,
    color: "white",
    backgroundColor: "transparent"
  }
});

export default connect(state => state)(DeckList);
