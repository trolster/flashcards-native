export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

export function addCard(deck, card) {
  return {
    type: ADD_CARD,
    deck,
    card
  };
}

export function removeCard(deck, cardIndex) {
  return {
    type: REMOVE_CARD,
    deck,
    cardIndex
  };
}
