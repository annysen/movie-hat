import { useEffect, useState } from "react";

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState(watchTime);

  useEffect(() => {
    const getTime = JSON.parse(localStorage.getItem("watchTime"));
    setTime(getTime);
  }, [watchTime]);

  const clearTime = () => {
    localStorage.clear();

    const loadTime = JSON.parse(localStorage.getItem("watchTime"));
    console.log(loadTime);
    setTime(0);
  };
  return (
    <div className=" px-5">
      <div className="card w-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">My Cart</h2>
          <div className="stats shadow w-auto">
            <div className="stat">
              <div className="stat-title">Total Watching Time</div>
              <div className="stat-value">{time}</div>
              <div className="stat-title">Add Break Time</div>
              <div className="card-actions">
                <button className="btn btn-secondary">5 min</button>
                <button className="btn btn-accent">10 min</button>
                <button className="btn btn-info">15 min</button>
              </div>
              <input
                disabled
                value={time}
                type="text"
                placeholder="Break Time"
                className="input input-bordered w-full max-w-xs mt-5"
              />
            </div>
          </div>

          <div className="card-actions justify-end mt-3">
            <button onClick={clearTime} className="btn btn-warning">
              Reset
            </button>
            <button className="btn btn-primary">Compleat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
