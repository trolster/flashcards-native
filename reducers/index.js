const testState = {
  react: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces."
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event."
      },
      {
        question: "WWhat is React's license?",
        answer: "MIT"
      },
      {
        question: "What is Next.js?",
        answer: "A static site framework built with create-react-app."
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
      },
      {
        question: "What is prototypal inheritance?",
        answer:
          "Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects via delegation that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming."
      },
      {
        question: "What is an expression?",
        answer:
          'An expression in a programming language is a combination of one or more explicit values, constants, variables, operators, and functions that the programming language interprets (according to its particular rules of precedence and of association) and computes to produce ("to return", in a stateful environment) another value. '
      }
    ]
  }
};
const initialState = {
  decks: testState,
  selectedDeck: "react"
};

function Deck(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default Deck;
