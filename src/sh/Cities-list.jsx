import axios from 'axios';
import React, { useEffect } from 'react'

const Citieslist = () => {
    useEffect(() => {
        fetchState();
      }, []);
    
      const fetchState = async () => {
        try {
          const res = await axios.get("https://api.minebrat.com/api/v1/states");
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      };
    
  return (
    <div>
        <h1>cities list</h1>
        <select name="first" id="">
          <option value="1">citys 1</option>
          <option value="3">citys 2</option>
          <option value="4">citys 13</option>
        </select>
    </div>
  )
}

export default Citieslist