import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div role="tablist" className="tabs tabs-lift">
      <NavLink
        to={`/category/${category.category}`}
        role="tab"
        className={({ isActive }) =>
          `tab text-2xl ${isActive ? "tab-active" : ""}`
        }
      >
        {category.category}
      </NavLink>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
