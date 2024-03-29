const Card = (props) => {
  //   console.log(props.d);
  const { poster, movieName, description, imdbRating, watchTime } = props.d;

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2" src={poster} alt={movieName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movieName}</h2>
          <p>{description}</p>
          <div className="flex">
            <p>Watch Time: {watchTime}</p>
            <p> IMdb Rating: {imdbRating}</p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => props.handleTime(watchTime)}
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
