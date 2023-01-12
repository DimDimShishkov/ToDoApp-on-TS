import React from "react";
import { useSelector } from "react-redux";
import "./StartPage.css";

/* interface StartPageProps {
  setCurrentProject: any;
} */

const StartPage = ({ setCurrentProject }) => {
  const projects = useSelector((store) => store.projectsReducer.projectsItems);
  return (
    <div className="start-page">
      <div className="start-page__container">
        <h1 className="start-page__title">ToDoApp on TypeScript</h1>
        <h2 className="start-page__subtitle">List of projects:</h2>
        {projects.map((project) => (
          <p
            className="start-page__item"
            onClick={() => setCurrentProject(project)}
            key={project.id}
          >
            {project.name}
          </p>
        ))}
        <button className="start-page__button">Add new project</button>
      </div>
    </div>
  );
};

export default StartPage;
