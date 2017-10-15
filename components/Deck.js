import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Deck extends Component {
  // Add/Remove Cards
  // Start Quiz
  // See quiz results (latest quiz)
  addNewQuestion = () => {
    console.log("Adding card...");
  };
  startQuiz = () => {
    console.log("quiz starting...");
  };
  render() {
    const { decks, navigation } = this.props;
    const deck = decks[navigation.state.params.title];
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text>There are {deck.questions.length} cards in this deck.</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={this.startQuiz}>
          <Text style={styles.btnTitle}>Start a Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={this.addNewQuestion}
        >
          <Text style={styles.btnTitle}>Add New Question</Text>
        </TouchableOpacity>
        {deck.latestResult ? (
          <Text>Latest Quiz Result: {deck.latestResult}</Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
