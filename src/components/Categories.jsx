import PropTypes from "prop-types";
import Category from "./Category";
import CoffeeCards from "./CoffeeCards";

const Categories = ({ categories }) => {
  return (
    <div className="mb-5">
      <div role="tablist" className="tabs tabs-lift justify-center mb-10">
        {
            categories.map((category) =><Category key={category.id} category={category} />)
        }
      </div>
      <CoffeeCards/>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Categories;
