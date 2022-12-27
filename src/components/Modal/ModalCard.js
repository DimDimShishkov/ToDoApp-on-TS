import React from "react";
import { useDispatch } from "react-redux";
import { addNewCard, editCard } from "../../store/actions/cards";
import ModalEditCard from "./EditCard/ModalEditCard";
import "./ModalCard.css";
import ModalNewCard from "./NewCard/ModalNewCard";

export default function ModalCard({ type = false, closeModal, card }) {
  const dispatch = useDispatch();

  const handleSubmitForm = (data) => {
    closeModal();
    if (type) {
      dispatch(addNewCard(data));
    } else {
      dispatch(editCard(data));
    }
  };

  return (
    <section className="modal" onClick={() => closeModal()}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__heading">
          {type ? "New Task" : `Edit Task №${card.id}`}
        </h2>
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
