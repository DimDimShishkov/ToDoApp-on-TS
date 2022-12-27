import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ModalNewCard.css";

export default function ModalNewCard({ handleSubmitForm }) {
  const [isFilesDropping, setFilesDropping] = useState(false);
  const [attachments, setAttachments] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    handleSubmitForm({ ...data, attachments });
  };

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
      onSubmit={handleSubmit(onSubmit)}
      className="modal__form"
      autoComplete="off"
      noValidate
    >
      <fieldset className="form__fieldset">
        <label className="form__label">
          <input
            {...register("title", {
              required: "this field is required.",
              minLength: {
                value: 2,
                message: "sorry, but text is too short.",
              },
            })}
            placeholder="Title"
            required={true}
            minLength={2}
            maxLength={30}
            className="form__input"
            type="text"
          />
          <p className="form__title">Title</p>

          {errors.title && (
            <span className="form__input-error">{errors.title.message}</span>
          )}
        </label>

        <label className="form__label-select">
          <p className="form__title-select">Priority</p>
          <select {...register("priority")} className="form__select">
            <option
              className="form__option"
              value="low"
              style={{ background: "rgba(0, 255, 0, .5)" }}
            >
              Low
            </option>
            <option
              className="form__option"
              value="medium"
              style={{ background: "rgba(255, 255, 0, .5)" }}
            >
              Medium
            </option>
            <option
              className="form__option"
              value="hight"
              style={{ background: "rgba(255, 0, 0, .5)" }}
            >
              Hight
            </option>
          </select>
        </label>

        <label className="form__label-select">
          <p className="form__title-select">Finish at</p>
          <input
            className="form__select"
            type="datetime-local"
            {...register("finDate")}
          />
        </label>

        <label className="form__label">
          <textarea
            {...register("description", {
              required: "this field is required.",
              minLength: {
                value: 2,
                message: "sorry, but text is too short.",
              },
            })}
            placeholder="Description"
            required={true}
            minLength={2}
            rows={2}
            maxLength={130}
            className="form__input form__input_description"
            type="text"
          />
          <p className="form__title">Description</p>
          {errors.description && (
            <span className="form__input-error form__input-error_description">
              {errors.description.message}
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

      <button
        type="submit"
        className={`form__submit-button ${
          !isValid && "form__submit-button_disabled"
        }`}
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
}
