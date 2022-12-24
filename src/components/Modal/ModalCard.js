import React, { useState } from "react";
import ModalEditCard from "./EditCard/ModalEditCard";
import "./ModalCard.css";
import ModalNewCard from "./NewCard/ModalNewCard";

export default function ModalCard({ type = false, closeModal, card }) {
  const [newValue, setNewValue] = useState({});
  const [validationMessage, setValidationMessage] = useState({});

  const handleSubmitForm = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <section className="modal" onClick={() => closeModal()}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__heading">{type ? "New Task" : "Edit Task"}</h2>
        {type ? (
          <ModalNewCard handleSubmitForm={handleSubmitForm} />
        ) : (
          <ModalEditCard card={card} handleSubmitForm={handleSubmitForm} />
        )}
        <button
          className="modal__exit-button"
          type="button"
          onClick={() => closeModal()}
        />
      </div>
    </section>
  );
}
