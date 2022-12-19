import "./StartPage.css";

export default function StartPage() {
  return (
    <div className="start-page">
      <div className="start-page__container">
        <h1 className="start-page__title">ToDoApp on TypeScript</h1>
        <h2 className="start-page__subtitle">List of projects:</h2>
        <p className="start-page__item">project1</p>
        <button className="start-page__button">Add new project</button>
      </div>
    </div>
  );
}
