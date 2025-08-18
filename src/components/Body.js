import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local state variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const arr = useState([]);
  console.log(arr);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
            console.log("123");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-containers">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
