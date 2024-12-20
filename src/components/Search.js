import React from "react";
import { useGlobalContext } from "../context";

export default function Top() {
  const { SetsearchTerm, allMealsUrl, fetchRandomMeals, ReturnToDefault } =
    useGlobalContext();

  const [InputVal, setInputVal] = React.useState("");

  function handleChange(e) {
    // another way to write e.target.value
    const { value, } = e.target;

    setInputVal(value);
  }
  function HandleSubmit(e) {
    e.preventDefault();

    if (InputVal) {
      SetsearchTerm(InputVal);
      console.log(`${allMealsUrl}${InputVal}`);
    }
  }
  function handleRandomMeals() {
    SetsearchTerm("");
    setInputVal("");
    fetchRandomMeals();
  }

  return (
    <header className="search-container">
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          className="form-input"
          onChange={handleChange}
          value={InputVal}
          onClick={ReturnToDefault}
          placeholder="Type your Favourite meal..."
        />
        <button type="submit" className="btn">
          Search
        </button>
        <button
          onClick={handleRandomMeals}
          className="btn btn-hipster"
          type="button"
        >
          Suprise me!
        </button>
      </form>
    </header>
  );
}
