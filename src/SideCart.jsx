const SideCart = () => {
  return (
    <div className=" px-5">
      <div className="card w-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">My Cart</h2>
          <div className="stats shadow w-auto">
            <div className="stat">
              <div className="stat-title">Total Watching Time</div>
              <div className="stat-value">89,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
