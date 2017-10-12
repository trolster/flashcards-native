import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, REMOVE_CARD } from "../actions";
import testState from "../utils/testState.json";

const initialState = {
  decks: {}
};

function deck(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      };
    case ADD_DECK:
      return {};
    case ADD_CARD:
      return {};
    case REMOVE_CARD:
      return {};
    default:
      return state;
  }
}

export default deck;