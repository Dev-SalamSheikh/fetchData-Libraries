import React from "react";
import { useQuery } from "react-query";
import getQuote from "../React Query/getquote";

const Query = () => {
  const { data } = useQuery("quote", () => getQuote());
  return (
    <div>
      <h1>Fetch Data by React Query Libary</h1>
      <div className="content">
        <p>{data?.content}</p>
        <span>{data?.author}</span>
      </div>
    </div>
  );
};

export default Query;
