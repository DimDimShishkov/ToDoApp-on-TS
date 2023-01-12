import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./Main.css";
import MainItem from "./MainItem";
import { editCard, setCurrentProject } from "../../store/actions/cards";

export default function Main({
  currentProjectID,
  setTaskEdit,
  handleOpenPopupEditTask,
  currentDate,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentProject(currentProjectID));
  }, [currentProjectID, dispatch]);

  const cards = useSelector((store) => store.cardsReducer.cardsItems);
  const initialSectionsName = ["ToDo", "In Progress", "Done"];
  // стилизация перемещения
  const getItemStyle = (isDragging, draggableStyle) => ({
    background: isDragging ? "rgb(144, 238, 144)" : "rgb(252, 252, 253)",
    ...draggableStyle,
  });
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "rgb(173, 216, 230)" : "rgb(246, 248, 250)",
  });
  // функция сохранения при перемещении
  function onDragEnd(result) {
    const { destination, draggableId } = result;
    if (!destination) return;
    const [chosenCard] = cards.filter((card) => card.id === +draggableId);
    chosenCard.section = destination.droppableId;
    destination.droppableId === "In Progress" &&
      (chosenCard.startDate = new Date().getTime());
    dispatch(editCard(chosenCard));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className="main">
        {cards ? (
          initialSectionsName.map((name, ind) => (
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
          ))
        ) : (
          <p>Данные удалены. Просьба перезагрузить страницу</p>
        )}
      </section>
    </DragDropContext>
  );
}
