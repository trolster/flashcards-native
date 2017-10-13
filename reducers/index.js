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
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.title]: {
            title: action.title,
            questions: []
          }
        }
      };
    case ADD_CARD:
      return {};
    default:
      return state;
  }
}

export default deck;
