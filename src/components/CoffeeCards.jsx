import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../../public/coffees.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const { category } = useParams();

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if(category){
      const matchedCoffees = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(matchedCoffees);
    }else{
      setCoffees(data);
    }
  }, [data, category]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeCards;
