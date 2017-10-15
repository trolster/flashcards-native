import { AsyncStorage } from "react-native";
import tolower from "lodash.tolower";
import setDummyData from "./setDummyData";

const STORAGE_KEY = "udaciCards:decks";

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
    return setDummyData(STORAGE_KEY, result);
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

export function saveNewCard(deckTitle, card) {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    const data = JSON.parse(result);
    data[tolower(deckTitle)].questions.push(card);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
}
