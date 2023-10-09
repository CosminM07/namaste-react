import React from "react";
import ReactDOM from "react-dom/client";

/*
HEADER - logo nav items
BODY - Search 
FOOTER - copyright links address contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;

    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.data;

    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rer4sl5bfjhtjl5jhgqi"/>
            <h3>{ name }</h3>
            <h4>{ cuisine.join(", ") }</h4>
            <h4>{ average }</h4>
            <h4>{ deliveryTime}</h4>
        </div>  
    )
}

const resList = {}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCard key={restaurant.key.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)