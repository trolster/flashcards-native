import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { TabNavigator, StackNavigator } from "react-navigation";
import { View, StatusBar, Platform } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import reducer from "./reducers";
import { AddDeck, AddCard, DeckList, Deck, Quiz } from "./components";

const store = createStore(reducer);

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Deck List",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? "purple" : "white",
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? "white" : "purple",
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const navOptions = {
  headerTintColor: "#FFF",
  headerStyle: {
    backgroundColor: "#1485ff"
  }
};

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: { ...navOptions, title: "FlashCards" }
  },
  DeckList: {
    screen: DeckList,
    navigationOptions: navOptions
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: { ...navOptions, title: "Add Card" }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: { ...navOptions, title: "Quiz" }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar translucent barStyle="dark-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
