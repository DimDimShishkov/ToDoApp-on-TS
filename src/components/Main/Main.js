import React, { useState } from "react";
import "./Main.css";
import MainItem from "./MainItem";

export default function Main({ setTaskEdit, handleOpenPopupEditTask }) {
  const [cardsArr, setCardsArr] = useState([
    {
      section: "ToDo",
      title: "test1",
      priority: "medium",
      time: "12:44",
      id: 1,
      dateStar: "2022-12-24",
      dateFin: "2022-12-24",
      description: "test test",
    },
    {
      section: "In Progress",
      title: "test4",
      priority: "medium",
      time: "12:44",
      id: 4,
      dateStar: "2022-12-24",
      dateFin: "2022-12-24",
      description: "test test",
    },
    {
      section: "Done",
      title: "test5",
      priority: "medium",
      time: "12:44",
      id: 5,
      dateStar: "2022-12-24",
      dateFin: "2022-12-24",
      description: "test test",
    },
  ]);

  return (
    <section className="main">
      <MainItem
        name={"ToDo"}
        children={cardsArr.filter((card) => card.section === "ToDo")}
        handleOpenPopupEditTask={handleOpenPopupEditTask}
        setTaskEdit={setTaskEdit}
      />
      <MainItem
        name={"In Progress"}
        children={cardsArr.filter((card) => card.section === "In Progress")}
        handleOpenPopupEditTask={handleOpenPopupEditTask}
        setTaskEdit={setTaskEdit}
      />
      <MainItem
        name={"Done"}
        children={cardsArr.filter((card) => card.section === "Done")}
        handleOpenPopupEditTask={handleOpenPopupEditTask}
        setTaskEdit={setTaskEdit}
      />
    </section>
  );
}
