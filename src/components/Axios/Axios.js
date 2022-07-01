import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.quotable.io/random");
      setQuote(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Data By Axios</h1>
      <div className="content">
        <h2>{quote ? !quote : "Please Wait quote is Loading"}</h2>
        <h2>{quote?.content}</h2>
        <h4>{quote?.author}</h4>
      </div>
    </div>
  );
};

export default Axios;
