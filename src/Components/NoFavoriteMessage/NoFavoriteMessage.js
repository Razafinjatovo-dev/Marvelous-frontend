import React from "react";
import "./NoFavoriteMessage.css";

const NoFavoriteMessage = (props) => {
  const { type } = props;
  return (
    <div className="NoFavWrapper">
      <div className="NoFavMessage">
        NO FAVORITE {type} FOR NOW <br />
        CHECK OUT {type} LIST TO PICK YOUR FAVORITE ONES
      </div>
    </div>
  );
};

export default NoFavoriteMessage;
