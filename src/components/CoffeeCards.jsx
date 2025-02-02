import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../../public/coffees.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const { category } = useParams();

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (category) {
      const matchedCoffees = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(matchedCoffees);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [data, category]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="btn btn-warning"
          onClick={() => navigate("/coffees")}
        >
          View All
        </button>
      </div>
    </>
  );
};

export default CoffeeCards;
