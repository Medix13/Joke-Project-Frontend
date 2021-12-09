const questionChars = "q. ";
const answerChars = "a. ";

const splitQuestionAndAnswer = (jokeString) => {
  if (jokeString.includes(questionChars) && jokeString.includes(answerChars)) {
    const question = jokeString.substring(
      questionChars.length,
      jokeString.indexOf(answerChars) - 1
    );
    const answer = jokeString.substring(
      jokeString.indexOf(answerChars) + answerChars.length
    );

    return {
      question,
      answer,
      text: null,
    };
  }

  return {
    question: null,
    answer: null,
    text: jokeString,
  };
};

const Joke = ({ jokeString }) => {
  const { question, answer, text } = splitQuestionAndAnswer(jokeString);

  if (text) {
    return (
      <div className="text">
        <p>{text}</p>
      </div>
    );
  }
  return (
    <div className="text">
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
};

export default Joke;
