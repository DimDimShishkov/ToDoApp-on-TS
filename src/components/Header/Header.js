import { useDispatch } from "react-redux";
import "./Header.css";

export default function Header({
  currentProject,
  setCurrentProject,
  handleOpenPopupNewTask,
}) {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1 className="header__title">{currentProject}</h1>
      <div className="header__buttons">
        <button
          className="header__button"
          onClick={() => handleOpenPopupNewTask()}
        >
          new task
        </button>
        <button className="header__button">search task</button>
        <button
          className="header__button"
          onClick={() => setCurrentProject("")}
        >
          back to projects
        </button>
      </div>
    </header>
  );
}
