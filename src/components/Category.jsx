import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div>
      <NavLink to={`/category/${category.category}`} role="tab" className="tab">
        {category.category}
      </NavLink>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
