import { useState } from "react";
import ProjectPage from "../ProjectPage/ProjectPage";
import StartPage from "../StartPage/StartPage";
import "./App.css";

export default function App() {
  const [currentProjectName, setCurrentProjectName] = useState("");
  const [currentProjectID, setCurrentProjectID] = useState("");

  function handleSetCurrentProject(project) {
    setCurrentProjectID(project.id);
    setCurrentProjectName(project.name);
  }
  return (
    <div className="page">
      {currentProjectName ? (
        <ProjectPage
          currentProjectName={currentProjectName}
          currentProjectID={currentProjectID}
          setCurrentProject={handleSetCurrentProject}
        />
      ) : (
        <StartPage setCurrentProject={handleSetCurrentProject} />
      )}
    </div>
  );
}
