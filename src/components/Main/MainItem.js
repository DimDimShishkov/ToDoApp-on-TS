import React from "react";
import Card from "../Card/Card";

export default function MainItem({ name, children }) {
  return (
    <section className="main__item">
      <div className="main__header">
        <h2 className="main__heading">{name}</h2>
        <span className="main__counter">{children.length}</span>
        <button className="main__add-button">Add item</button>
      </div>
      {children.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}
