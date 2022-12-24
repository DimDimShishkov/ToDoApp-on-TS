import React, { useEffect, useState } from "react";
import "./ModalEditCard.css";

export default function ModalEditCard({ card, handleSubmitForm }) {
  const [newValue, setNewValue] = useState({});
  const [validationMessage, setValidationMessage] = useState({});
  const [isFilesDropping, setFilesDropping] = useState(false);
  const [attachments, setAttachments] = useState(0);

  // загрузка данных редактируемой карточки
  useEffect(() => {
    setNewValue({
      title: card?.title,
      priority: card?.priority,
      finDate: `${card?.dateFin}T${card?.time}`,
      description: card?.description,
      attachments: card?.attachments,
      id: card?.id,
    });
  }, [card]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSubmitForm({ ...newValue, attachments });
  };

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setNewValue({ ...newValue, [name]: value });
    if (value.length <= 1) {
      setValidationMessage({
        ...validationMessage,
        [name]: "sorry, but text is too short",
      });
    } else {
      setValidationMessage({
        ...validationMessage,
        [name]: "",
      });
    }
  };

  const submitButtonState =
    !validationMessage.title &&
    !validationMessage.priority &&
    !validationMessage.finDate &&
    !validationMessage.description;

  // добавление файлов
  function dragStartHandler(e) {
    e.preventDefault();
    setFilesDropping(true);
  }
  function dragEndHandler(e) {
    e.preventDefault();
    setFilesDropping(false);
  }
  function dropHandler(e) {
    e.preventDefault();
    setAttachments(attachments + 1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="modal__form"
      autoComplete="off"
      noValidate
    >
      <fieldset className="form__fieldset">
        <label className="form__label">
          <input
            placeholder="Title"
            required={true}
            minLength={2}
            maxLength={30}
            type="text"
            className="form__input"
            onChange={handleChange}
            name="title"
            value={newValue?.title || ""}
          />
          <p className="form__title">Title</p>

          {validationMessage?.title && (
            <span className="form__input-error">
              {validationMessage?.title}
            </span>
          )}
        </label>

        <label className="form__label-select">
          <p className="form__title-select">Priority</p>
          <select
            name="priority"
            onChange={handleChange}
            className="form__select"
            value={newValue?.priority || ""}
          >
            <option
              className="form__option"
              value="low"
              style={{ background: "rgba(0, 255, 0, .5)" }}
            >
              low
            </option>
            <option
              className="form__option"
              value="medium"
              style={{ background: "rgba(255, 255, 0, .5)" }}
            >
              medium
            </option>

            <option
              className="form__option"
              value="hight"
              style={{ background: "rgba(255, 0, 0, .5)" }}
            >
              hight
            </option>
          </select>
        </label>

        <label className="form__label-select">
          <p className="form__title-select">Finish at</p>
          <input
            required={true}
            name="finDate"
            type="datetime-local"
            onChange={handleChange}
            className="form__select"
            value={newValue?.finDate || ""}
          />
          {validationMessage?.finDate && (
            <span className="form__input-error">This field is required</span>
          )}
        </label>

        <label className="form__label">
          <textarea
            placeholder="Description"
            required={true}
            minLength={2}
            rows={2}
            maxLength={130}
            className="form__input form__input_description"
            type="text"
            onChange={handleChange}
            name="description"
            value={newValue?.description || ""}
          />
          <p className="form__title">Description</p>

          {validationMessage?.description && (
            <span className="form__input-error">
              {validationMessage?.description}
            </span>
          )}
        </label>

        <label
          className={`form__attachments ${
            isFilesDropping && "form__attachments_active"
          }`}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => dropHandler(e)}
          draggable={true}
        >
          <input type="file" className="form__attachments-input" />
          Choose a attachments or drag it here
        </label>
        <span className="form__attachments-message">
          Uploaded files: {attachments}
        </span>
      </fieldset>

      <input
        type="submit"
        className={`form__submit-button ${
          !submitButtonState && "form__submit-button_disabled"
        } `}
        disabled={!submitButtonState}
      />
    </form>
  );
}
