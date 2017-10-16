import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/notifications";
import { connect } from "react-redux";
import { Card } from "./";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Quiz"
    };
  };

  state = {
    index: 0,
    score: 0,
    done: false
  };

  handleAnswer = (correct = false) => {
    const deckId = this.props.navigation.state.params.deckId;
    const questions = this.props.decks[deckId].questions;
    let { score, index } = this.state;

    score = correct ? score + 1 : score;
    index++;
    done = index === questions.length;
    this.setState({ index, score, done });

    if (done) {
      clearLocalNotification().then(setLocalNotification);
    }
  };

  restartQuiz = () => {
    this.setState({ index: 0, score: 0, done: false });
  };

  backToDeck = () => {
    const deckId = this.props.navigation.state.params.deckId;
    this.props.navigation.navigate("Deck", { deckId });
  };

  render() {
    const deckId = this.props.navigation.state.params.deckId;
    const questions = this.props.decks[deckId].questions;
    const { index, score, done } = this.state;
    if (done) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Result: {Math.floor(score / questions.length * 100)}% Correct
          </Text>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={this.restartQuiz}
          >
            <Text style={styles.btnTitle}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={this.backToDeck}
          >
            <Text style={styles.btnTitle}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>
          Current Score: {score} out of {questions.length}
        </Text>
        <Text>Questions Remaining: {questions.length - index}</Text>
        <Card card={questions[index]} handleAnswer={this.handleAnswer} />
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

export default connect(state => state)(Quiz);
