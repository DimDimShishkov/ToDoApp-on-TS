import { useEffect, useState } from "react";
import "./Card.css";

export default function Card({ card }) {
  const [isOptionsOpen, setOptionOpen] = useState(false);

  let content;

  const toQueueHandler = (card) => {
    card.section = "ToDo";
  };
  const toProgressHandler = (card) => {
    card.section = "In Progress";
  };
  const toDoneHandler = (card) => {
    card.section = "Done";
  };

  switch (card.section) {
    case "ToDo":
      content = (
        <div
          className={`card__footer-menu ${
            isOptionsOpen && "card__footer-menu_active"
          }`}
        >
          <button className="card__footer-button">add subtask</button>
          <button
            className="card__footer-button"
            onClick={() => toProgressHandler(card)}
          >
            in Progress
          </button>
          <button
            className="card__footer-button"
            onClick={() => toDoneHandler(card)}
          >
            Done
          </button>
        </div>
      );
      break;
    case "In Progress":
      content = (
        <div
          className={`card__footer-menu ${
            isOptionsOpen && "card__footer-menu_active"
          }`}
        >
          <button className="card__footer-button">add subtask</button>
          <button
            className="card__footer-button"
            onClick={() => toQueueHandler(card)}
          >
            toDo
          </button>
          <button
            className="card__footer-button"
            onClick={() => toDoneHandler(card)}
          >
            Done
          </button>
        </div>
      );
      break;
    default:
      content = (
        <div
          className={`card__footer-menu ${
            isOptionsOpen && "card__footer-menu_active"
          }`}
        >
          <button className="card__footer-button">add subtask</button>
          <button
            className="card__footer-button"
            onClick={() => toQueueHandler(card)}
          >
            toDo
          </button>
          <button
            className="card__footer-button"
            onClick={() => toProgressHandler(card)}
          >
            in Progress
          </button>
        </div>
      );
  }

  const closeOptions = (e) => {
    /*     let item = e.target
      .closest("div")
      .classList.contains("card__footer-menu_active");
    if (!item) { */
    setOptionOpen(false);
    document.removeEventListener("click", closeOptions);
    // }
  };
  useEffect(() => {
    isOptionsOpen && document.addEventListener("click", closeOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOptionsOpen]);

  function dragStartHandler() {}
  function dragEndHandler(e) {
    e.target.style.background = "#fcfcfd";
  }
  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = "lightgrey";
  }
  function dropHandler() {}

  return (
    <div
      className="card"
      onDragStart={(e) => dragStartHandler(e /*, card */)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e /* , card */)}
      draggable={true}
    >
      <div className="card__header">
        <h2 className="card__heading">{card.name}</h2>
        <div className="card__header-container">
          <p className="card__priority">{card.priority}</p>
          <p className="card__time">{card.time}</p>
        </div>
      </div>
      <div className="card__info">
        <div className="card__info-text">
          <p className="card__id">CardID: {card.id}</p>
          <p className="card__date">Start: {card.dateStar}</p>
          <p className="card__date">DL: {card.dateFin}</p>
        </div>
        <div className="card__info-buttons">
          <button className=" card__edit-button card__button" />
          <button className=" card__delete-button card__button" />
        </div>
      </div>
      <p className="card__description">{card.description}</p>
      <div className="card__footer">
        <div className="card__footer-buttons">
          <button className="card__comment-button card__button" />
          <button className="card__attachment-button card__button" />
        </div>
        <div
          className="card__footer-action"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="card__footer-more"
            onClick={() => setOptionOpen(true)}
          >
            ...
          </button>

          {content}
        </div>
      </div>
    </div>
  );
}
