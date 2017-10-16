import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import tolower from "lodash.tolower";
import { connect } from "react-redux";
// our modules
import { addCard } from "../actions";
import { saveNewCard } from "../utils/api";

class AddDeck extends Component {
  state = {
    question: "",
    answer: ""
  };

  saveCard = () => {
    const deckId = tolower(this.props.navigation.state.params.title);
    const { question, answer } = this.state;
    this.props.dispatch(addCard(deckId, { question, answer }));
    this.props.navigation.goBack();
    saveNewCard(deckId, { question, answer });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>FlashCard Details</Text>
        <View style={styles.inputContainer}>
          <TextInput
            multiLine={true}
            autoGrow={true}
            autoCapitalize="none"
            autoFocus={true}
            style={styles.input}
            placeholder="Question"
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            multiLine={true}
            autoGrow={true}
            autoCapitalize="none"
            style={styles.input}
            placeholder="Answer"
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.saveCard}>
          <Text style={{ color: "white" }}>Save Card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    height: 40,
    margin: 30,
    flexDirection: "row"
  },
  input: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    flex: 1
  },
  btn: {
    marginTop: 40,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5
  }
});

export default connect()(AddDeck);
