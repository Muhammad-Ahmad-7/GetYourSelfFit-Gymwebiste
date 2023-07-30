import React, { useEffect, useState } from "react";
import "../css/style.css";
import Videos from "./Videos";

const SearchExercise = () => {
  const [searchValue, setSearchValue] = useState("");
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const fetchData = async (name) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${name}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e69a93d0f5msh53483a351c7cce5p1cdf7ajsn85613c7de568",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the JSON response
      console.log(result);
      setExerciseDetail(result); // Store the array of exercises in the state
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const defaultValue = "push up";
    fetchData(defaultValue);
  }, []);

  const handleSearch = () => {
    if (searchValue) {
      setTimeout(() => {
        setShowResult(true);
      }, 2000);
      const searchRequest = searchValue.toLowerCase();
      fetchData(searchRequest);
      setButtonClicked(true);
      setTimeout(() => {
        setButtonClicked(false);
      }, 5000);
    } else {
    }
  };

  return (
    <>
      <div className="search-area">
        <h2 className="mt-3 text-center search-heading">
          Find the Best Exercise for You!
        </h2>
        <div className="input-container">
          <input
            type="text"
            name="search"
            id="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button
            type="submit"
            className={`btn1 ${buttonClicked ? "clicked-btn" : ""}`}
            onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {showResult && (
        <h1 style={{ fontSize: "2rem" }} className="text-center">
          Showing results for: {searchValue}
        </h1>
      )}
      <div className="container d-flex flex-wrap justify-content-center gap-5">
        {exerciseDetail &&
          exerciseDetail.slice(0, 6).map((exercise, index) => {
            return (
              <>
                <div className="exerciseComponent" key={index}>
                  <img
                    src={exercise.gifUrl}
                    alt={exercise.name}
                    loading="lazy"
                    className="exerciseImage"
                  />
                  {/* {console.log(exercise)} */}
                  <div
                    className="text-center"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      fontFamily: '"poppins", san-sarif',
                    }}>
                    {exercise.name} <br />
                    {exercise.target} <br />
                    {exercise.equipment}
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <Videos searchValue={searchValue} />
    </>
  );
};

export default SearchExercise;
