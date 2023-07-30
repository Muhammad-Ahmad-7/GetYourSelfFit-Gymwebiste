import React, { useState } from "react";

const Bmi = () => {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(180);
  const [age, setAge] = useState(20);
  const [bmi, setbmi] = useState({});
  const [weightValue, setWeightValue] = useState({});

  const fetchDataBmi = async () => {
    const url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e69a93d0f5msh53483a351c7cce5p1cdf7ajsn85613c7de568",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setbmi(result.data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataWeight = async () => {
    const url = `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${gender}&height=${height}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e69a93d0f5msh53483a351c7cce5p1cdf7ajsn85613c7de568",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setWeightValue(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleData = (event) => {
    if (gender && weight && age && height && bmi && weightValue) {
      fetchDataBmi();
      fetchDataWeight();
    } else {
      alert("Please Fill all the fields");
    }
    event.preventDefault();
  };

  return (
    <div className="bmi-container">
      <h1 className="text-center text-white">Fitness Calculator</h1>
      <div className="text-white d-flex container">
        <div>
          <form action="" className="form-container">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="input d-block p-2 m-2"
              value={gender}
              onChange={(event) => {
                setGender(event.target.value);
              }}
            />
            <label htmlFor="height">Height</label>
            <input
              type="text"
              className="input d-block p-2 m-2"
              value={height}
              onChange={(event) => {
                setHeight(event.target.value);
              }}
            />
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              className="input d-block p-2 m-2"
              value={weight}
              onChange={(event) => {
                setWeight(event.target.value);
              }}
            />
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="input d-block p-2 m-2"
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
            <button className="submit-button" onClick={handleData}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="info-container container text-white">
        {bmi && (
          <div className="info-container">
            <div className="info">BMI: {bmi.bmi ? bmi.bmi : 0}</div>
            <div className="info">Health: {bmi.health ? bmi.health : 0}</div>
            <div className="info">
              BMI Range: {bmi.healthy_bmi_range ? bmi.healthy_bmi_range : 0}
            </div>
          </div>
        )}
        {weightValue && (
          <div className="info-container">
            <h2 className="weight-heading">Ideal Weight</h2>
            <div className="info">
              Hamwi Formula: {weightValue.Hamwi ? weightValue.Hamwi : 0}
            </div>
            <div className="info">
              Devine Formula: {weightValue.Devine ? weightValue.Devine : 0}
            </div>
            <div className="info">
              Miller Formula: {weightValue.Miller ? weightValue.Miller : 0}
            </div>
            <div className="info">
              Robinson Formula:{" "}
              {weightValue.Robinson ? weightValue.Robinson : 0}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bmi;
