import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
    done: false,
    questions: this.props.decks[this.props.navigation.state.params.deckId]
      .questions
  };

  handleAnswer = (correct = false) => {
    let { score, index } = this.state;
    const numberOfQuestions = this.state.questions.length;
    index++;
    done = index === numberOfQuestions;
    score = correct ? score + 1 : score;
    this.setState({ index, score, done });
  };

  restart = () => {
    this.setState({ index: 0, score: 0, done: false });
  };

  render() {
    const { index, score, done, questions } = this.state;
    if (done) {
      return (
        <View style={styles.container}>
          <Text>
            Result: {score}/{questions.length}
          </Text>
          <TouchableOpacity style={styles.btnContainer} onPress={this.restart}>
            <Text style={styles.btnTitle}>Try Again?</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Text>
          Current Score: {score} out of {questions.length}
        </Text>
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
