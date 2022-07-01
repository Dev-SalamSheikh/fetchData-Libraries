import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    const fetchQoute = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    };

    fetchQoute();
  }, []);

  return (
    <div>
      <h1>Get Data Using Default Fetch Api</h1>
      <div className="content">
        <p>{quote?.content}</p>
        <span>{quote?.author}</span>
      </div>
    </div>
  );
};

export default Fetch;
