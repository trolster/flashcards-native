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
    // const decks = Object.keys(this.props.decks);
    // if (decks.length) {
    //   return (
    //     <View style={styles.container}>
    //       <Text style={styles.title}>Decks</Text>
    //       <FlatList
    //         data={Object.keys(this.props.decks)}
    //         renderItem={DeckListItem}
    //         keyExtractor={item => item}
    //       />
    //     </View>
    //   );
    // }
    return (
      <Text>{JSON.stringify(Object.keys(this.props.decks), null, 2)}</Text>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    fontSize: 30
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
