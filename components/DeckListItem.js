import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const handlePress = title => {
  alert(title);
};

const DeckListItem = ({ item: title }) => {
  return (
    <TouchableOpacity
      style={styles.deckListItemContainer}
      onPress={() => handlePress(title)}
    >
      <MaterialCommunityIcons
        style={styles.icon}
        name="cards-outline"
        size={160}
      />
      <Text style={styles.deckTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deckListItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

export default DeckListItem;
