import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editCard, removeCard } from "../../store/actions/cards";
import "./Card.css";

export default function Card({
  card,
  handleOpenPopupEditTask,
  setTaskEdit,
  currentDate,
  provided,
  snapshot,
  getItemStyle,
}) {
  const dispatch = useDispatch();
  const [isOptionsOpen, setOptionOpen] = useState(false);
  const [devTime, setDevTime] = useState("");

  useEffect(() => {
    if (card.section === "In Progress") {
      let diff = currentDate - card?.startDate;
      const days = Math.floor(diff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;
      if (diff <= 0) setDevTime(`added now`);
      else if (days) setDevTime(`at work for ${days}d`);
      else if (hours) setDevTime(`at work for ${hours}h`);
      else if (minutes) setDevTime(`at work for ${minutes}min`);
      else setDevTime(`at work for ${seconds}sec`);
    }
  }, [card, currentDate]);

  const toNewSectionHandler = (card, name) => {
    card.section = name;
    dispatch(editCard(card));
    name === "In Progress" && (card.startDate = new Date().getTime());
  };

  // отображение текста на модалки с меню
  let modalContent;
  switch (card.section) {
    case "ToDo":
      modalContent = (
        <div
          className={`card__footer-menu ${
            isOptionsOpen && "card__footer-menu_active"
          }`}
        >
          <button className="card__footer-button">add subtask</button>
          <button
            className="card__footer-button"
            onClick={() => toNewSectionHandler(card, "In Progress")}
          >
            in Progress
          </button>
          <button
            className="card__footer-button"
            onClick={() => toNewSectionHandler(card, "Done")}
          >
            Done
          </button>
        </div>
      );
      break;
    case "In Progress":
      modalContent = (
        <div
          className={`card__footer-menu ${
            isOptionsOpen && "card__footer-menu_active"
          }`}
        >
          <button className="card__footer-button">add subtask</button>
          <button
            className="card__footer-button"
            onClick={() => toNewSectionHandler(card, "ToDo")}
          >
            toDo
          </button>
          <button
            className="card__footer-button"
            onClick={() => toNewSectionHandler(card, "Done")}
          >
            Done
          </button>
        </div>
      );
      break;
    default:
      modalContent = (
        <div
          className={`card__footer-menu ${
            isOptionsOpen && "card__footer-menu_active"
          }`}
        >
          <button className="card__footer-button">add subtask</button>
          <button
            className="card__footer-button"
            onClick={() => toNewSectionHandler(card, "ToDo")}
          >
            toDo
          </button>
          <button
            className="card__footer-button"
            onClick={() => toNewSectionHandler(card, "In Progress")}
          >
            in Progress
          </button>
        </div>
      );
  }

  let priorityClass;
  switch (card.priority) {
    case "low":
      priorityClass = "card__priority_low";
      break;
    case "medium":
      priorityClass = "card__priority_medium";
      break;
    default:
      priorityClass = "card__priority_hight";
  }

  // слушатели на закрытие модалки меню таска
  useEffect(() => {
    const closeOptions = (e) => {
      let item = e.target
        .closest("div")
        .classList.contains("card__footer-menu_active");
      if (!item) {
        setOptionOpen(false);
        document.removeEventListener("mouseup", closeOptions);
      }
    };
    isOptionsOpen && document.addEventListener("mouseup", closeOptions);
  }, [isOptionsOpen]);

  // открытие модалки для редактирования карточки
  const handleEditTask = () => {
    handleOpenPopupEditTask(true);
    setTaskEdit(card);
  };

  return (
    <div
      className="card"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
    >
      <div className="card__header">
        <h2 className="card__heading">{card.title}</h2>
        <div className="card__header-container">
          <p className={`card__priority ${priorityClass}`}>{card.priority}</p>
          <p className="card__time">
            {card.section === "ToDo"
              ? "new task"
              : card.section === "Done"
              ? "completed"
              : devTime}
          </p>
        </div>
      </div>
      <div className="card__info">
        <div className="card__info-text">
          <p className="card__id">CardID: {card.id}</p>
          <p className="card__date">
            DL: {card.finDate ? card.finDate.split("T")[0] : "any"}
          </p>
        </div>
        <div className="card__info-buttons">
          <button
            className=" card__edit-button card__button"
            onClick={() => handleEditTask()}
          />
          <button
            className=" card__delete-button card__button"
            onClick={() => dispatch(removeCard(card))}
          />
        </div>
      </div>
      <p className="card__description">{card.description}</p>
      <div className="card__footer">
        <div className="card__footer-buttons">
          <button className="card__comment-button card__button" />
          <button className="card__attachment-button card__button" />
        </div>
        <div className="card__footer-action">
          <button
            className="card__footer-more"
            onClick={() => setOptionOpen(true)}
          >
            ...
          </button>

          {modalContent}
        </div>
      </div>
    </div>
  );
}
