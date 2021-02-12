import React from "react";
import "./FavoriteCharacters.css";
import NoFavoriteMessage from '../NoFavoriteMessage/NoFavoriteMessage';

const FavoriteCharacters = (props) => {
  const { favoriteCharactersList, favoriteCharactersPopulated } = props;
  let finalList = [];
  // let finalListLength = finalList.length;
  //Populate each favorite character listed
  for (let i = 0; i < favoriteCharactersList.length; i++) {
    for (let z = 0; z < favoriteCharactersPopulated.length; z++) {
      if (favoriteCharactersList[i] === favoriteCharactersPopulated[z]._id) {
        finalList.push(favoriteCharactersPopulated[z]);
        // setFinalList(newList);
      }
    }
  }



  console.log(favoriteCharactersList);
  console.log(favoriteCharactersPopulated);

  return <div>{finalList.length===0? <NoFavoriteMessage type="CHARACTERS"/> : ( <div className="FavChar_GlobalWrapper">
    <h3 className="FavChar_PageTitle">MY FAVORITE CHARACTERS</h3>
    <div className=" FavoriteCharacters_Wrapper">
      {finalList.map((favorite) => {
        return (
          <div className="FavoriteCharacter_IdCardWrapper">
            <div className="FavoriteCharacter_PictureWrapper">
              <img
                src={favorite.pictureUrl + "." + favorite.pictureExtension}
                alt={favorite.name}
              />
            </div>
            {/* <p>{favorite._id}</p> */}
            <p className='FavoriteCharacter_name'>{favorite.name}</p>
            {/* <hr></hr> */}
          </div>
        );
      })}
    </div>
  </div>)}</div>; // x?y:z

  //RETURN QUI MARCHE DEBUT

  // return (
  //   <div>
  //     <h3 className="FavChar_PageTitle">MY FAVORITE CHARACTERS</h3>
  //     <div className=" FavoriteCharacters_Wrapper">
  //       {finalList.map((favorite) => {
  //         return (
  //           <div className="FavoriteCharacter_Wrapper">
  //             <div className="FavoriteCharacter_PictureWrapper">
  //               <img
  //                 src={favorite.pictureUrl + "." + favorite.pictureExtension}
  //                 alt={favorite.name}
  //               />
  //             </div>
  //             {/* <p>{favorite._id}</p> */}
  //             <p className='FavoriteCharacter_name'>{favorite.name}</p>
  //             {/* <hr></hr> */}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

  //RETURN QUI MARCHE FIN
};

export default FavoriteCharacters;
