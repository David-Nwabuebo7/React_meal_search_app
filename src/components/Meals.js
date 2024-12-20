import React from "react";
import { useGlobalContext } from "../context";
import { FaThumbsUp } from "react-icons/fa";

export default function Box() {
  const { Loading, meals, SelectMeals, SetFavourites, favourite} =
    useGlobalContext();

  if (Loading) {
    return (
      <section className="section">
        <h2 className="Loading">Loading...</h2>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="section">
        <h4 className="Loading">
          No meals matched your search term. please try again!!!
        </h4>
      </section>
    );
  }

  function GrabFavourites(title, image, idMeal, text, source) {
    let NewFavouriteMeal = {
      title: title,
      image: image,
      idMeal: idMeal,
      strInstructions: text,
      strSource: source
    };
    // this checks if the favourite already exists.
    const alreadyFavourite = favourite.find((meal) => meal.idMeal === idMeal);
    if (!alreadyFavourite) {
      // we use spread to keep the existing favourites in the array while simultaneously updating the array.
      const updateFavourite = [...favourite, NewFavouriteMeal];
      SetFavourites(updateFavourite);
    } else {
      alert("This Meal Alredy Exist in Your Favourites Meals!");
    }
  }
 
  return (
    <div className="Meals-con">
      <section className="section-center">
        {meals.map((singleMeal) => {
          // easier way to categorize data
          const {
            idMeal,
            strMeal: title,
            strMealThumb: image,
            strInstructions: text,
            strSource: source,
          } = singleMeal;
          return (
            <article
              className="single-meal"
              key={idMeal}
             
            >
              <img
                alt="Meals"
                src={image}
                className="img"
                onClick={() => SelectMeals(idMeal)}
              />
              <footer>
                <h5>{title}</h5>
                <button className="like-btn">
                  <FaThumbsUp
                    onClick={() =>
                      GrabFavourites(title, image, idMeal, text, source)
                    }
                  />
                </button>
              </footer>
            </article>
          );
        })}
      </section>
    </div>
  );
}
