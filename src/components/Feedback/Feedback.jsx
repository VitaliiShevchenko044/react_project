import { useState } from "react";
import Button from "../Button/Button";

import "./styles.css";

function Feedback() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [dislike, setDislikeCounter] = useState(0);

  const likeIncrement = () => setLikeCounter((prev) => ++prev);
  const dislikeIncrement = () => setDislikeCounter((prev) => ++prev);

  const reset = () => {
    setLikeCounter(0);
    setDislikeCounter(0);
  };

  return (
    <div className="feedback_wrapper">
      <div className="button_with_counter_container">
        <Button name="Like" onClick={likeIncrement} />
        <p>{likeCounter}</p>
      </div>
      <div className="button_with_counter_container">
        <Button name="Dislike" onClick={dislikeIncrement} />
        <p>{dislike}</p>
      </div>
      <div className="button_with_counter_container">
        <Button name="Reset Results" onClick={reset} />
      </div>
    </div>
  );
}

export default Feedback;
