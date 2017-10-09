const testState = {
  react: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  javascript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};
const initialState = {
  decks: testState,
  selectedDeck: ""
};

function Deck(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default Deck;

