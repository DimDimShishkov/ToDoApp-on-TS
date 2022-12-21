import React from "react";
import "./Main.css";
import MainItem from "./MainItem";

export default function Main() {
  let cardsArr = [
    {
      section: "ToDo",
      name: "test1",
      priority: "medium",
      time: "13:00",
      id: 1,
      dateStar: "21.12.2022",
      dateFin: "22.12.2022",
      description: "test test",
    },
    {
      section: "ToDo",
      name: "test2",
      priority: "medium",
      time: "13:00",
      id: 2,
      dateStar: "21.12.2022",
      dateFin: "22.12.2022",
      description: "test test",
    },
    {
      section: "ToDo",
      name: "test3",
      priority: "medium",
      time: "13:00",
      id: 3,
      dateStar: "21.12.2022",
      dateFin: "22.12.2022",
      description: "test test",
    },
    {
      section: "In Progress",
      name: "test4",
      priority: "medium",
      time: "13:00",
      id: 4,
      dateStar: "21.12.2022",
      dateFin: "22.12.2022",
      description: "test test",
    },
    {
      section: "Done",
      name: "test5",
      priority: "medium",
      time: "13:00",
      id: 5,
      dateStar: "21.12.2022",
      dateFin: "22.12.2022",
      description: "test test",
    },
  ];

  return (
    <section className="main">
      <MainItem
        name={"ToDo"}
        children={cardsArr.filter((card) => card.section === "ToDo")}
      />
      <MainItem
        name={"In Progress"}
        children={cardsArr.filter((card) => card.section === "In Progress")}
      />
      <MainItem
        name={"Done"}
        children={cardsArr.filter((card) => card.section === "Done")}
      />
    </section>
  );
}
