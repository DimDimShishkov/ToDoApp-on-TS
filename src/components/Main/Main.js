import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./Main.css";
import MainItem from "./MainItem";
import { editCard } from "../../store/actions/cards";

export default function Main({
  setTaskEdit,
  handleOpenPopupEditTask,
  currentDate,
}) {
  const dispatch = useDispatch();
  const cards = useSelector(({ cards }) => cards.cardsItems);
  const initialSectionsName = ["ToDo", "In Progress", "Done"];

  // стилизация перемещения
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: 16,
    margin: `0 0 8px 0`,
    background: isDragging ? "lightgreen" : "rgb(252, 252, 253)",
    ...draggableStyle,
  });
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "rgb(246, 248, 250)",
    padding: 8,
  });
  // функция сохранения при перемещении
  function onDragEnd(result) {
    const { destination, draggableId } = result;
    if (!destination) return;
    const [chosenCard] = cards.filter((card) => card.id === +draggableId);
    chosenCard.section = destination.droppableId;
    dispatch(editCard(chosenCard));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className="main">
        {initialSectionsName.map((name, ind) => (
          <Droppable key={ind} droppableId={name}>
            {(provided, snapshot) => (
              <MainItem
                name={name}
                currentDate={currentDate}
                children={cards.filter((card) => card.section === name)}
                handleOpenPopupEditTask={handleOpenPopupEditTask}
                setTaskEdit={setTaskEdit}
                provided={provided}
                snapshot={snapshot}
                getListStyle={getListStyle}
                getItemStyle={getItemStyle}
              />
            )}
          </Droppable>
        ))}
      </section>
    </DragDropContext>
  );
}
