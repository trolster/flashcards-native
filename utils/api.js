import { AsyncStorage } from "react-native";
import tolower from "lodash.tolower";

const STORAGE_KEY = "udaciCards:decks";

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
    if (result === null) {
      return { decks: {} };
    }
    return JSON.parse(result);
  });
}

export function saveNewDeck(deckTitle) {
  const deckId = tolower(deckTitle);
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [deckId]: {
        title: deckTitle,
        questions: []
      }
    })
  );
}

export function saveNewCard(id, card) {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    const data = JSON.parse(result);
    data[id].questions.push(card);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
}
