import React from "react";

import { useGlobalContext } from "../context";
export default function Modal() {
  const { CloseModal, SelectedMeals } = useGlobalContext();

  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = SelectedMeals;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt="Foods" className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank" rel="noreferrer">
            Original Source
          </a>
          <button
            onClick={() => CloseModal()}
            className="btn btn-hipster close-btn"
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
}
