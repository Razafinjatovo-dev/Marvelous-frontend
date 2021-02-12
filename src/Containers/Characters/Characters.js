import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";
// import FavoriteCharacters from "./FavoriteCharacters";

const Characters = (props) => {
  const {
    favoriteCharactersList,
    setFavoriteCharactersList,
    favoriteCharactersPopulated,
    setFavoriteCharactersPopulated,
  } = props;
  const Url = "https://marvelous-backend.herokuapp.com";
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [characterName, setCharacterName] = useState("");
  const [resultsQtity, setResultsQtity] = useState(0);

  const limit = 100;

  //Fetch characters data
  // console.log(favoriteCharactersList);

  useEffect(() => {
    const fetchCharacters = async () => {
      // console.log("fetching data");
      const response = await axios.get(
        `Url?skip=${skip}&characterName=${characterName}`
      );
      // console.log(response.data.results)
      setCharacters(response.data.results);
      setResultsQtity(response.data.count);
      setIsLoading(false);
      // console.log(response.data);
    };
    fetchCharacters();
  }, [skip, characterName, favoriteCharactersList]);

  //Pages Onclick
  const handlePage = (event) => {
    // console.log(Number(event.target.value));
    //SKIP VALUE CALCULATION
    const targetedPage = Number(event.target.value);
    const skipValue = (targetedPage - 1) * limit;
    setSkip(skipValue);
    // console.log("character skip value :"+ skip);
  };

  //SearchBar management
  const handleCharacterName = (event) => {
    setSkip(0);
    setCharacterName(event.target.value);
  };
  console.log(favoriteCharactersList);
  console.log(favoriteCharactersPopulated);
  return isLoading === true ? (
    <div>Loading page...</div>
  ) : (
    <div className="MainContentWrapper">
      <div className="LargeScreen_WidthLimiter">
        <div className="Characters_header">
          <h4 className="Characters_PageTitle">MARVEL CHARACTERS</h4>
          {/* SEARCHBAR START */}
          <div className="Characters_searchBar">
            <FontAwesomeIcon icon="search" />
            <input
              type="text"
              onChange={handleCharacterName}
              value={characterName}
              placeholder="SEARCH"
            />
          </div>
          {/* SEARCHBAR  END */}
          <p className="ResultsQtity">{resultsQtity} RESULTS</p>
        </div>

        <div className="CharactersIdWrapper">
          {characters.map((character) => {
            return (
              <div
                className="CharacterIdCard"
                key={character._id}
                // style={{ backgroundColor: "LightGrey" }}
              >
                <Link
                  to={`/CharacterDetails/${character._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="Character_picture_description">
                    <div className="CharacterPicture">
                      <img
                        src={
                          character.thumbnail.path +
                          "." +
                          character.thumbnail.extension
                        }
                        alt={character.name}
                      />
                    </div>

                    <p className="Character_name" key={character._id}>
                      {character.name}
                    </p>
                    <p className="Character_description">
                      Description :{" "}
                      {character.description ? character.description : "N/A"}
                    </p>
                  </div>
                </Link>

                {/* HEART CLICK DEBUT  */}
                <p
                  className="LikeButton"
                  onClick={() => {
                    //Check if current character is included in favorites list
                    let isIncluded = favoriteCharactersList.includes(
                      character._id
                    );
                    if (isIncluded === false) {
                      //If not included, add the current character in favorite list
                      let newFavoriteList = [...favoriteCharactersList];
                      newFavoriteList.push(character._id);
                      setFavoriteCharactersList(newFavoriteList);

                      //Add also populated data in favoriteCharactersPopulated
                      let newFavoriteListPopulated = [
                        ...favoriteCharactersPopulated,
                      ];
                      newFavoriteListPopulated.push({
                        _id: character._id,
                        name: character.name,
                        pictureUrl: character.thumbnail.path,
                        pictureExtension: character.thumbnail.extension,
                      });
                      setFavoriteCharactersPopulated(newFavoriteListPopulated);
                    } else {
                      // otherwise if current character is included, remove it from favorites list
                      let characterIndexInFavoriteList = favoriteCharactersList.indexOf(
                        character._id
                      );
                      let newFavoriteList = [...favoriteCharactersList];
                      newFavoriteList.splice(characterIndexInFavoriteList, 1);
                      setFavoriteCharactersList(newFavoriteList);
                    }
                  }}
                >
                  {favoriteCharactersList.includes(character._id) === true ? (
                    <FontAwesomeIcon icon="heart" color="red" size="2x" />
                  ) : (
                    <FontAwesomeIcon icon="heart" color="lightGrey" size="2x" />
                  )}
                </p>

                {/* HEART CLICK FIN  */}
              </div>
            );
          })}
        </div>
        {/* Pagination  */}
        <div className="PaginationWrapper">
          <div className="PageNumbers_Wrapper">
            <input type="button" value="1" onClick={handlePage} />
            <input type="button" value="2" onClick={handlePage} />
            <input type="button" value="3" onClick={handlePage} />
            <input type="button" value="4" onClick={handlePage} />
            <input type="button" value="5" onClick={handlePage} />
            <input type="button" value="6" onClick={handlePage} />
            <input type="button" value="7" onClick={handlePage} />
            <input type="button" value="8" onClick={handlePage} />
            <input type="button" value="9" onClick={handlePage} />
            <input type="button" value="10" onClick={handlePage} />
            <input type="button" value="11" onClick={handlePage} />
            <input type="button" value="12" onClick={handlePage} />
            <input type="button" value="13" onClick={handlePage} />
            <input type="button" value="14" onClick={handlePage} />
            <input type="button" value="15" onClick={handlePage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
