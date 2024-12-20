import React from "react";
import { useGlobalContext } from "../context";

export default function Favourite() {
  const { favourite, SetFavourites, SelectMeals2 } = useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h4>Favourites</h4>
        <div className="favorites-container">
          {favourite.map((meals) => {
            const { title, image, idMeal } = meals;
            function Remove(idMeal) {
              // this basically return the loop of of the the meajs in which the idmeal is not equal to the clicked one
              let Delete = favourite.filter((meals) => meals.idMeal !== idMeal);
              SetFavourites(Delete);
            }
            return (
              <div key={idMeal} className="favorite-item">
                <img
                  src={image}
                  alt={title}
                  className="favorites-img"
                  onClick={() => SelectMeals2(idMeal)}
                />
                <h6>{title}</h6>

                <button onClick={() => Remove(idMeal)} className="remove-btn">
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
