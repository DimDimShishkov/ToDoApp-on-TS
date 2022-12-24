import { useState } from "react";
import ProjectPage from "../ProjectPage/ProjectPage";
import StartPage from "../StartPage/StartPage";
import "./App.css";

export default function App() {
  const [currentProject, setCurrentProject] = useState("");

  return (
    <div className="page">
      <ProjectPage
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />
      {/*       {currentProject ? (
        <ProjectPage
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      ) : (
        <StartPage setCurrentProject={setCurrentProject} />
      )} */}
    </div>
  );
}
