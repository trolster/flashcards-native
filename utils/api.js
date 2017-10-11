import { AsyncStorage } from "react-native";

const STORAGE_KEY = "udaciCards";

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
    return JSON.parse(result);
  });
}

export function saveNewDeck(deckTitle) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
    })
  );
}

export function removeDeck(deckTitle) {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[deckTitle] = undefined;
    delete data[deckTitle];
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
}

export function addCard(deckTitle, card) {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    const data = JSON.parse(result);
    data[deckTitle].questions.push(card);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
}

export function removeCard(decktitle, cardIndex) {
  return AsyncStorage.getItem(STORAGE_KEY).then(restuls => {
    const data = JSON.parse(results);
    data[decktitle].questions.splice(cardIndex, 1);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
}
