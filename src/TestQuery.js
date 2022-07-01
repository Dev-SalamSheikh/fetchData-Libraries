import React from "react";
import { useQuery } from "react-query";
import getQuote from "./components/React Query/getquote";

const TestQuery = () => {
  const { data } = useQuery("quote", () => getQuote());
  return (
    <div>
      <h1>Testing React Query Data Fetching on another components</h1>
      <div className="content">
        <p>Quote :- {data.content}</p>
        <span>Author :- {data.author}</span>
      </div>
    </div>
  );
};

export default TestQuery;
