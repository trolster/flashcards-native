import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { DeckList } from "./components";

const store = createStore(reducer);

const MainNavigator = () => {
  return <Text>Yo</Text>;
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DeckList />
      </Provider>
    );
  }
}
