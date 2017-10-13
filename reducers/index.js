import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions";

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
    default:
      return state;
  }
}

export default deck;
