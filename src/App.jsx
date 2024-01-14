import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import SideCart from "./SideCart";

function App() {
  const [watchTime, setWatchTime] = useState("");

  const handleTime = (time) => {
    // console.log(time);

    const storedData = JSON.parse(localStorage.getItem("watchTime"));

    if (storedData) {
      const sumTime = storedData + time;
      localStorage.setItem("watchTime", sumTime);
      setWatchTime(sumTime);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };
  return (
    <div className="mx-7 md:mx-12">
      <Nav />
      <div className=" grid grid-cols-3 my-5 gap-5">
        <span className="col-span-1 md:col-span-2">
          <Home handleTime={handleTime} />
        </span>
        <span className="">
          <SideCart watchTime={watchTime} />
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default App;
