import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { TabNavigator, StackNavigator } from "react-navigation";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import reducer from "./reducers";
import { AddDeck, AddCard, DeckList, Deck, Quiz } from "./components";

const store = createStore(reducer);

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Deck List",
      tabBarIcon: () => <MaterialCommunityIcons name="cards" size={30} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: "New Deck",
      tabBarIcon: () => (
        <MaterialCommunityIcons name="cards-outline" size={30} />
      )
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: { title: "FlashCards" }
  },
  DeckList: {
    screen: DeckList
  },
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
