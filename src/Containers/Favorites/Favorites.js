import React from "react";
import { Link } from "react-router-dom";
import './Favorites.css'


const Favorites = () => {
  return (
    <div className='FavWrapper'>
<Link to='/FavoriteCharacters'>
      <div className="redirectFavorite">CLICK HERE TO CHECK YOUR FAVORITE CHARACTERS</div>
</Link>
<Link to='/FavoriteComics'>
      <div className="redirectFavorite">CLICK HERE TO CHECK YOUR FAVORITE COMICS</div>
</Link>
      {/* <FavoriteComics/> */}
    </div>
  );
};

export default Favorites;
