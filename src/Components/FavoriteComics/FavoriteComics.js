import React from "react";
import "./FavoriteComics.css";
import NoFavoriteMessage from '../NoFavoriteMessage/NoFavoriteMessage';

const FavoriteComics = (props) => {
  const { favoriteComicsIdList, favoriteComicsPopulated } = props;
  let finalList = [];

  //Populate each favorite character listed
  for (let i = 0; i < favoriteComicsIdList.length; i++) {
    for (let z = 0; z < favoriteComicsPopulated.length; z++) {
      if (favoriteComicsIdList[i] === favoriteComicsPopulated[z]._id) {
        finalList.push(favoriteComicsPopulated[z]);
        // setFinalList(newList);
      }
    }
  }

  // useEffect(() => {
  //   setFinalList(newList);
  // }, [finalList]);

return (<div>
  {finalList.length ===0? <NoFavoriteMessage type="COMICS"/>:(<div className="FavCom_GlobalWrapper">
      <h3 className="FavCom_PageTitle">MY FAVORITE COMICS</h3>
      <div className=" FavoriteComics_Wrapper">
        {finalList.map((favorite) => {
          return (
            <div className="FavoriteComic_IdCardWrapper" key={favorite._id}>
              <div className="FavoriteComic_PictureWrapper">
                <img
                  src={favorite.pictureUrl + "." + favorite.pictureExtension}
                  alt={favorite.title}
                />
              </div>
              <p className='FavoriteComic_name'>{favorite.title}</p>
            </div>
          );
        })}
      </div>
    </div>)}
</div>)


//RETURN QUI MARCHE DEBUT 
  // return (
  //   <div>
  //     <h3 className="FavCom_PageTitle">MY FAVORITE COMICS</h3>
  //     <div className=" FavoriteComics_Wrapper">
  //       {finalList.map((favorite) => {
  //         return (
  //           <div className="FavoriteComic_Wrapper" key={favorite._id}>
  //             <div className="FavoriteComic_PictureWrapper">
  //               <img
  //                 src={favorite.pictureUrl + "." + favorite.pictureExtension}
  //                 alt={favorite.title}
  //               />
  //             </div>
  //             <p className='FavoriteComic_name'>{favorite.title}</p>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  //RETURN QUI MARCHE FIN 
};

export default FavoriteComics;
