import { apiResponse } from "../../utils/api";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  // Local state variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  console.log("Body rendered");
  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000002&page_type=DESKTOP_WEB_LISTING"
    );
    const json = apiResponse;
    console.log(json?.data?.cards[4]?.card?.card);
    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <h1>Loading...</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmber />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
            console.log("123");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-containers">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
