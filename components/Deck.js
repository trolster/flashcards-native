import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Deck extends Component {
  addNewQuestion = title => {
    this.props.navigation.navigate("AddCard", {
      title,
      update: () => this.refreshOnGoBack()
    });
  };

  startQuiz = () => {
    this.props.navigation.navigate("Quiz", {
      deckId: this.props.navigation.state.params.deckId
    });
  };

  render() {
    const { decks, navigation } = this.props;
    const deck = decks[navigation.state.params.deckId];
    const hasCards = !!deck.questions.length;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text>There are {deck.questions.length} cards in this deck.</Text>
        {hasCards ? (
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => this.startQuiz(deck.title)}
          >
            <Text style={styles.btnTitle}>Start a Quiz</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => this.addNewQuestion(deck.title)}
        >
          <Text style={styles.btnTitle}>Add New Question</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30
  },
  btnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 5,
    marginTop: 15,
    width: 240,
    maxHeight: 40
  },
  btnTitle: {
    fontSize: 20,
    color: "white",
    marginTop: 10
  }
});

export default connect(state => state)(Deck);
