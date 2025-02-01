import PropTypes from "prop-types";
import Category from "./Category";
import CoffeeCards from "./CoffeeCards";

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <div role="tablist" className="tabs tabs-lift">
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
