import React from "react";

import { useGlobalContext } from "../context";

export default function Rite2() {
  const { CloseModal2, SelectedMeals2 } = useGlobalContext();

  const { title, image, idMeal, strInstructions, strSource } = SelectedMeals2;

  return (
    <aside className="modal-overlay">
      <div className="modal-container" key={idMeal}>
        <img src={image} alt="Foods" className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{strInstructions}</p>
          <a href={strSource} target="_blank" rel="noreferrer">
            Original Source
          </a>
          <button
            onClick={() => CloseModal2()}
            className="btn btn-hipster close-btn"
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
}
