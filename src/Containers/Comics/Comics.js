import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState,useEffect } from "react";
import "./Comics.css";

const Comics = (props) => {
  const {
    favoriteComicsIdList,
    setFavoriteComicsIdList,
    favoriteComicsPopulated,
    setFavoriteComicsPopulated,
  } = props;
  const Url = "https://marvelous-backend.herokuapp.com";
  const [comicsData, setComicsData] = useState();
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [comicTitle, setComicTitle] = useState("");
  const [resultsQtity, setResultsQtity] = useState(0);
  //PAGINATION START
  const comicsQtity = 47397;
  const ComicsPerPage = 100;
  //Page qtity calculation
  const pagesQtity = Math.ceil(comicsQtity / ComicsPerPage);

  const pages = [];

  for (let i = 1; i <= pagesQtity; i++) {
    pages.push(i);
  }

  // Pages Onclick
  const handlePage = (event) => {
    // console.log(Number(event.target.value));
    //SKIP VALUE CALCULATION
    const targetedPage = Number(event.target.value);
    // console.log(targetedPage);
    const skipValue = (targetedPage - 1) * ComicsPerPage;
    setSkip(skipValue);
    // console.log("Skip value:"+skip)
  };

  //PAGINATION END

  //Fetch comics data
  useEffect(() => {
    const fetchComics = async () => {
      const response = await axios.get(
        `${Url}/comics?skip=${skip}&title=${comicTitle}`
      );
      console.log(response.data.results);
      setComicsData(response.data.results);
      setResultsQtity(response.data.count);
      setIsLoading(false);
    };
    fetchComics();
  }, [skip, comicTitle]);

  //SEARCHBAR MANAGEMENT
  const handleComicTitle = (event) => {
    setSkip(0);
    setComicTitle(event.target.value);
  };

  return isLoading === true ? (
    <p>Loading Page...</p>
  ) : (
    <div className="MainContentWrapper">
      <div className="LargeScreen_WidthLimiter">
        <div className="Comics_header">
          <h4 className="Comics_PageTitle">MARVEL COMICS</h4>
          {/* SEARCHBAR START */}
          <div className="Comics_searchBar">
            <FontAwesomeIcon className="iconFasearch" icon="search" />
            <input
              type="text"
              onChange={handleComicTitle}
              value={comicTitle}
              placeholder="SEARCH"
            />
          </div>

          {/* SEARCHBAR  END*/}
          <p className="ResultsQtity">{resultsQtity} RESULTS</p>
        </div>
        <div className="ComicsIdWrapper">
          {comicsData.map((comic) => {
            return (
              <div className="ComicIdCard" key={comic._id}>
                {/* Photo, titre, description  */}
                <div className="Comic_Image">
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt={comic.title}
                  />
                  {/* <p>IMAGE </p> */}
                </div>
                <p className="Comic_Title" key={comic._id}>
                  {comic.title}
                </p>
                <p className="Comic_Description">
                  Comic description:
                  {comic.description ? comic.description : "N/A"}
                </p>
                {/* HEART BUTTON START */}
                <p
                  className="LikeButton"
                  onClick={() => {
                    //Check if current comic is included in favorites list
                    let isIncluded = favoriteComicsIdList.includes(comic._id);
                    if (isIncluded === false) {
                      //If not included, add the current comic in favorite list
                      let newFavoriteList = [...favoriteComicsIdList];
                      newFavoriteList.push(comic._id);
                      setFavoriteComicsIdList(newFavoriteList);

                      //Add also populated data in favoriteComicsPopulated
                      let newFavoriteListPopulated = [
                        ...favoriteComicsPopulated,
                      ];
                      newFavoriteListPopulated.push({
                        _id: comic._id,
                        title: comic.title,
                        pictureUrl: comic.thumbnail.path,
                        pictureExtension: comic.thumbnail.extension,
                      });
                      setFavoriteComicsPopulated(newFavoriteListPopulated);
                    } else {
                      // otherwise if current comic is included, remove it from favorites list
                      let characterIndexInFavoriteList = favoriteComicsIdList.indexOf(
                        comic._id
                      );
                      let newFavoriteList = [...favoriteComicsIdList];
                      newFavoriteList.splice(characterIndexInFavoriteList, 1);
                      setFavoriteComicsIdList(newFavoriteList);
                    }
                  }}
                >
                  {favoriteComicsIdList.includes(comic._id) === true ? (
                    <FontAwesomeIcon icon="heart" color="red" size="2x" />
                  ) : (
                    <FontAwesomeIcon icon="heart" color="grey" size="2x" />
                  )}
                </p>
                {/* HEART BUTTON END */}
              </div>
            );
          })}
        </div>
        {/* Pagination  */}
        <div className="PaginationWrapper">
          <div className="PageNumbers_Wrapper" id="PageNumbers_Wrapper">
            {pages.map((page) => {
              return (
                <div className="OnePageNumber_Wrapper">
                  <input
                    key={page}
                    type="button"
                    value={page}
                    onClick={handlePage}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comics;
