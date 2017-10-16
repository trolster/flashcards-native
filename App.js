import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { TabNavigator, StackNavigator } from "react-navigation";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import reducer from "./reducers";
import { AddDeck, AddCard, DeckList, Deck, Quiz } from "./components";
import { setLocalNotification } from "./utils/notifications";

const store = createStore(reducer);

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: "Deck List",
      tabBarLabel: "Deck List",
      tabBarIcon: () => <MaterialCommunityIcons name="cards" size={30} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: "New Deck",
      tabBarLabel: "New Deck",
      tabBarIcon: () => (
        <MaterialCommunityIcons name="cards-outline" size={30} />
      )
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckList: {
    screen: DeckList
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "Deck"
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add New Question"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  }
});

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
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
