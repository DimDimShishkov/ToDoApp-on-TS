import React, { useState } from "react";
import ModalEditCard from "./EditCard/ModalEditCard";
import "./ModalCard.css";
import ModalNewCard from "./NewCard/ModalNewCard";

export default function ModalCard({ type }) {
  const [newValue, setNewValue] = useState({});
  const [validationMessage, setValidationMessage] = useState({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(validationMessage);
  };
  let heading;

  if (type) {
    heading = "New Task";
  } else {
    heading = "Edit Task";
  }

  return (
    <section className="modal">
      <div className="modal__container">
        <h2 className="modal__heading">{heading}</h2>
        <ModalEditCard />
        <button className="modal__exit-button" type="button" />
      </div>
    </section>
  );
}
