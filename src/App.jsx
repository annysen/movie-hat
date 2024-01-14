import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import SideCart from "./SideCart";

function App() {
  const handleTime = (time) => {
    console.log(time);
  };
  return (
    <div className="mx-7 md:mx-12">
      <Nav />
      <div className=" grid grid-cols-3 my-5 gap-5">
        <span className="col-span-2">
          <Home handleTime={handleTime} />
        </span>
        <span>
          <SideCart />
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default App;
