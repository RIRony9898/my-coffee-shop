import { useParams } from "react-router-dom";

const CoffeeCards = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <h1>Coffee cards...{category}</h1>
    </div>
  );
};

export default CoffeeCards;
