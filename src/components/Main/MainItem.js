import React from "react";
import Card from "../Card/Card";
import { Draggable } from "react-beautiful-dnd";

export default function MainItem({
  name,
  currentDate,
  children,
  handleOpenPopupEditTask,
  setTaskEdit,
  provided,
  snapshot,
  getListStyle,
  getItemStyle,
}) {
  return (
    <section
      className="main__item"
      ref={provided.innerRef}
      style={getListStyle(snapshot.isDraggingOver)}
      {...provided.droppableProps}
    >
      <div className="main__header">
        <h2 className="main__heading">{name}</h2>
        <span className="main__counter">{children.length}</span>
      </div>
      {children.map((card, index) => (
        <Draggable key={card.id} draggableId={`${card.id}`} index={index}>
          {(provided, snapshot) => (
            <Card
              key={card.id}
              card={card}
              handleOpenPopupEditTask={handleOpenPopupEditTask}
              setTaskEdit={setTaskEdit}
              currentDate={currentDate}
              provided={provided}
              snapshot={snapshot}
              getItemStyle={getItemStyle}
            />
          )}
        </Draggable>
      ))}
      {provided.placeholder}
      {/* <button className="main__add-button">Add item</button> */}
    </section>
  );
}
