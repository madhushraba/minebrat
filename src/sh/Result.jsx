import React from "react";
import { useSearchParams } from "react-router-dom";

const Result = () => {
  const [SearchParams] = useSearchParams();
  return (
    <div>
      <h1>
        You Have selected -
        {SearchParams.get("state")}
      </h1>
      <h1> city :{SearchParams.get("city")}</h1>
    </div>
  );
};

export default Result;
