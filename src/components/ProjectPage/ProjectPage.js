import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalCard from "../Modal/ModalCard";
import ModalNewCard from "../Modal/NewCard/ModalNewCard";
import "./ProjectPage.css";

export default function ProjectPage({ currentProject, setCurrentProject }) {
  const [isNewTaskModalOpen, setNewTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setEditTaskModalOpen] = useState(false);
  const [isTaskEdit, setTaskEdit] = useState({});

  return (
    <section className="project-page">
      <Header
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        handleOpenPopupNewTask={() => setNewTaskModalOpen(!isNewTaskModalOpen)}
      />
      <Main
        setTaskEdit={setTaskEdit}
        handleOpenPopupEditTask={() =>
          setEditTaskModalOpen(!isEditTaskModalOpen)
        }
      />
      {isNewTaskModalOpen && (
        <ModalCard
          type={true}
          closeModal={() => setNewTaskModalOpen(!isNewTaskModalOpen)}
        />
      )}
      {isEditTaskModalOpen && (
        <ModalCard
          card={isTaskEdit}
          closeModal={() => setEditTaskModalOpen(!isEditTaskModalOpen)}
        />
      )}
    </section>
  );
}
