import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Ui from "./Ui";
// import Citieslist from "./Cities-list";

const List = () => {
  const nav = useNavigate();
  const [states, setstates] = useState([]);
  const [cities, setcities] = useState([]);
  const [selectedstate, setselectedstate] = useState("");
  const [selectedcity, setselectedcity] = useState("");

  useEffect(() => {
    fetchState();
  }, []);

  const fetchState = async () => {
    try {
      const res = await axios.get("https://api.minebrat.com/api/v1/states");
      // console.log(res);
      setstates(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCities = async (id) => {
    try {
      const resp = await axios.get(
        `http://api.minebrat.com/api/v1/states/cities/${id}`
      );
      setcities(resp.data);
      console.log(typeof id);
      // console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  const handlechange = (e) => {
    fetchCities(e.target.value);
    setselectedstate(e.target.value);
  };

  const handlechangecity = (e) => {
    setselectedcity(e.target.value);
  };
  const handsub = () => {
    nav({
      pathname: "/result",
      search: `?state=${selectedstate}&city=${selectedcity}`,
    });
    // console.log("ycgvbhnj");
  };

  return (
    <div>
      <div className="label">
        <label htmlFor="state">Choose a state:</label>

        <select name="state" id="id" onChange={handlechange}>
          {states.map((e) => {
            return (
              <option value={e.stateId} key={e.stateId}>
                {e.stateName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="div2">
        {cities.length > 0 && (
          <div>
            <label htmlFor="id">Choose a city:</label>
            <select name="any" id="id" onChange={handlechangecity}>
              {cities.map((e) => {
                return (
                  <option value={e.cityName} key={e.cityId}>
                    {e.cityName}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>
      <button onClick={handsub}>submit</button>
    </div>
  );
};

export default List;
