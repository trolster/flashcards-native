import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import tolower from "lodash.tolower";
import { addDeck } from "../actions";
import { saveNewDeck } from "../utils/api";

class AddDeck extends Component {
  static navigationOptions = {
    tabBarLabel: "Add Deck"
  };

  state = {
    title: ""
  };

  componentWillUnmount() {
    this.setState({ title: "" });
  }

  addDeck = () => {
    const { title } = this.state;
    const deckId = tolower(title);

    this.setState({ title: "" });
    this.props.dispatch(addDeck(title));
    this.props.navigation.navigate("Deck", { deckId });

    saveNewDeck(title);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={{ fontSize: 50 }}>Add New Deck</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Deck Title"
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.addDeck}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
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
