import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(`data.json`);
      const data = await res.json();
      setData(data);
    };
    loadData();
  }, []);

  console.log(data);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.map((d) => (
        <Card d={d} />
      ))}
    </div>
  );
};

export default Home;
