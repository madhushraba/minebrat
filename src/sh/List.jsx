import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      console.log(res);
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
      // console.log(typeof id);
      // console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  const handlechange = (e) => {
  //  console.log(e.target.name);
    setselectedstate(e.target.options[e.target.selectedIndex].text);
    // setselectedstate(e.nativeEvent.target.value);
    fetchCities(e.target.value);
  };

  const handlechangecity = (e) => {
    setselectedcity(e.target.value);
  };
  const handsub = () => {
    nav({
      pathname: "/result",
      search: `&state=${selectedstate}&city=${selectedcity}`,
    });
  };

  return (
    <div>
      <div className="label">
        <label >Choose a state:</label>

        <select id="id" onChange={handlechange}>
          {states.map((e) => {
            return (
              <option value={e.stateId} name={e.stateName} key={e.stateId}>
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
