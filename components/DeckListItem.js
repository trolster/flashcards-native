import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const handlePress = title => {
  alert(title);
};

const DeckListItem = ({ item: title }) => {
  return (
    <TouchableOpacity
      style={styles.deckListItemContainer}
      onPress={() => handlePress(title)}
    >
      <Text style={styles.deckTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deckListItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 5,
    margin: 15,
    width: 200,
    height: 40
  },
  deckTitle: {
    fontSize: 20,
    color: "white",
    backgroundColor: "transparent"
  }
});

export default DeckListItem;
