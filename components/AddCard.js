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
import { addCard } from "../actions";
import { saveNewCard } from "../utils/api";

class AddDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add New Question"
    };
  };

  state = {
    question: "",
    answer: "",
    deck: ""
  };

  componentWillUnmount() {
    this.setState({ question: "", answer: "", deck: "" });
  }

  componentDidMount() {
    this.setState({ deck: this.props.navigation.state.params.deckTitle });
  }

  saveCard = () => {
    const { question, answer, deck } = this.state;
    const deckId = tolower(deck);
    this.props.dispatch(addCard(deckId, { question, answer }));
    this.props.navigation.navigate("Deck", { deckId });
    saveNewCard(deck, { question, answer });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={{ fontSize: 30 }}>FlashCard Details</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Question"
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Answer"
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.saveCard}>
          <Text style={{ color: "white" }}>Save Card</Text>
        </TouchableOpacity>
        <Text>{JSON.stringify(this.props, null, 4)}</Text>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
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
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flex: 1
  },
  button: {
    marginTop: 40,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5
  }
});

export default connect()(AddDeck);
