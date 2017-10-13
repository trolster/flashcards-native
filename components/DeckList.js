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
import { receiveDecks } from "../actions";
import { getDecks, saveNewDeck } from "../utils/api";

class DeckList extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;

    const data = await getDecks();
    dispatch(receiveDecks(JSON.parse(data)));
  }

  handlePress = title => {
    this.props.navigation.navigate("Deck", { title });
  };

  render() {
    const decks = Object.keys(this.props.decks);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks</Text>
        <FlatList
          data={Object.keys(this.props.decks)}
          renderItem={({ item: title }) => (
            <TouchableOpacity
              style={styles.deckListItemContainer}
              onPress={() => this.handlePress(title)}
            >
              <Text style={styles.deckTitle}>{title}</Text>
            </TouchableOpacity>
          )}
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
    height: 40
  },
  deckTitle: {
    fontSize: 20,
    color: "white",
    backgroundColor: "transparent"
  }
});

export default connect(state => state)(DeckList);
