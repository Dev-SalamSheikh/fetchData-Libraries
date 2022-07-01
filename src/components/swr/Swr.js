import React from "react";
import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
const SWR = () => {
  const { data, error } = useSWR("https://api.quotable.io/random", fetcher, {
    suspense: true,
  });
  if (error) {
    return <h1>There Was an error....!</h1>;
  }
  return (
    <div>
      <h1>Fetch Data by SWR Libraries</h1>
      <div className="content">
        <p>{data?.content}</p>
        <span>{data?.author}</span>
      </div>
    </div>
  );
};

export default SWR;
