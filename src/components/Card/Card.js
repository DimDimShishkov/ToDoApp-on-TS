import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card__header">
        <h2>TEST</h2>
        <div className="card__header-container">
          <p className="card__priority">Level</p>
          <p className="card__time">time</p>
        </div>
      </div>
      <div className="card__info">
        <p className="card__id">card__id</p>
        <p className="card__date">card__date</p>
        <p className="card__date">card</p>
      </div>
      <p className="card__info">card__info</p>
      <div className="card__footer">
        <div className="card__links">
          <div className="card__comments">card__comments</div>
          <div className="card__attachment">card__attachment</div>
        </div>
        <div className="card__buttons">
          <button>subtask</button>
          <button>move to left</button>
          <button>move to right</button>
        </div>
      </div>
    </div>
  );
}
