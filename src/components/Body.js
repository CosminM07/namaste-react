import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([
        {
        type: "restaurant",
        data: {
            id: "334475",
            name: "KFC",
            cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
            cuisines: ["Burgers", "Biryani", "American"],
            costForTwo: 40000,
            deliveryTime: 36,
            avgRating: "3.8"
        }
        },
        {
            type: "restaurant",
            data: {
                id: "334476",
                name: "Dominos",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "4.5"
            }
        },
        {
            type: "restaurant",
            data: {
                id: "334477",
                name: "MCdonalts",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "4.1"
            }
        },
    ]);
    console.log(listOfRestaurants)
   

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        // Filtler logic her
                        const filtredList = listOfRestaurants.filter(res => res.data.avgRating > 4)
                        console.log(filtredList)
                        setListOfRestaurants(filtredList)
                    }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;