function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question?.options.map((o, i) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          className={`btn btn-option 
          ${i === answer ? "answer" : ""}
          ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={o}
          disabled={hasAnswered}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default Options;
