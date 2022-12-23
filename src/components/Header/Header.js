import { useDispatch } from "react-redux";
import "./Header.css";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1 className="header__title">current project</h1>
      <div className="header__buttons">
        <button className="header__button">new task</button>
        <button className="header__button">search task</button>
        <button className="header__button">back to projects</button>
      </div>
    </header>
  );
}
