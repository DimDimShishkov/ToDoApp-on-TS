import { useSelector } from "react-redux";
import "./StartPage.css";

export default function StartPage({ setCurrentProject }) {
  const projects = useSelector(({ projects }) => projects.projectsItems);
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
}
