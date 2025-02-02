import PropTypes from "prop-types";

const Card = ({ coffee }) => {
  const { name, image, category, type, origin, rating, popularity } = coffee;
  // console.log(coffee)
  return (
    <div>
      <div className="card bg-base-200 w-full shadow-sm">
        <figure>
          <img
            src= {image}
            alt={name}
            className="w-full h-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popularity: {popularity}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default Card;
