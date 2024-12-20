import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// this is how you pass down data
const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const RandomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

console.log(allMealsUrl);

function AppProvider({ children }) {
  const [meals, Setmeals] = useState([]);
  const [Loading, SetLoading] = useState(false);
  const NewFavourite = JSON.parse(localStorage.getItem("favourite"));
  const favorited = NewFavourite  ? NewFavourite : [];
  const [SearchTerm, SetsearchTerm] = useState("");
  const [ShowModal, SetShowModal] = React.useState(false);
  const [SelectedMeals, SetSelectedMeals] = React.useState(null);
  const [favourite, SetFavourites] = React.useState(favorited);
  const [ShowModal2, SetShowModal2] = React.useState(false);
  const [SelectedMeals2, SetSelectedMeals2] = React.useState(null);

  async function Fetcher(url) {
    SetLoading(true);

    try {
      const { data } = await axios(url);

      Setmeals(data.meals ? data.meals : []);
    } catch (error) {
      // even tho the link crash the catch will stil  run!!!
      <h4>unable to fetch data!!</h4>;
      console.log("could not fetch data due to internet issues!!");
      console.log(error.response);
    }

    SetLoading(false);
  }

  function GrabFavouritefromLocalStorage() {
    if (favourite) {
      localStorage.setItem("favourite", JSON.stringify(favourite));
    }
  }

  function SelectMeals(idMeal) {
    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal);
    SetSelectedMeals(meal);
    SetShowModal(true);
  }
  function SelectMeals2(idMeal) {
    let meal;
    meal = favourite.find((meal) => meal.idMeal === idMeal);
    SetSelectedMeals2(meal);
    SetShowModal2(true);
  }

  function CloseModal2() {
    SetShowModal2(false);
  }
  function CloseModal() {
    SetShowModal(false);
  }
  useEffect(() => {
    GrabFavouritefromLocalStorage();
  }, [favourite]);

  function fetchRandomMeals() {
    Fetcher(RandomUrl);
  }
  function ReturnToDefault() {
    Fetcher(allMealsUrl);
  }
  //  this runs first to display the default meals
  useEffect(() => {
    Fetcher(allMealsUrl);
  }, []);

  // this fectches for the search term
  useEffect(() => {
    //
    if (SearchTerm) {
      Fetcher(`${allMealsUrl}${SearchTerm}`);
    }
  }, [SearchTerm]);

  return (
    <AppContext.Provider
      value={{
        Loading,
        meals,
        SetsearchTerm,
        allMealsUrl,
        fetchRandomMeals,
        ShowModal,
        SetShowModal,
        SelectMeals,
        SelectedMeals,
        CloseModal,
        SetFavourites,
        favourite,
        CloseModal2,
        ShowModal2,
        SelectMeals2,
        SelectedMeals2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
//how to export the global use context function 
export function useGlobalContext() {
  return useContext(AppContext);
}
export { AppProvider, AppContext };
