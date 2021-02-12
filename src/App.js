import "./App.css";
// import Cookies from "js-cookie";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./Containers/Characters/Characters";
import Comics from "./Containers/Comics/Comics";
import Header from "./Containers/Headers/Header";
import CharacterDetails from "./Components/CharacterDetails/CharacterDetails";
import FavoriteCharacters from "./Components/FavoriteCharacters/FavoriteCharacters";
import FavoriteComics from "./Components/FavoriteComics/FavoriteComics";
import Favorites from "./Containers/Favorites/Favorites";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faSearch);

function App() {
  //Characters Favorites
  const [
    favoriteCharactersPopulated,
    setFavoriteCharactersPopulated,
  ] = useState([]);
  const [favoriteCharactersList, setFavoriteCharactersList] = useState([]);
  //Comics Favorites
  const [favoriteComicsIdList, setFavoriteComicsIdList] = useState([]);
  const [favoriteComicsPopulated, setFavoriteComicsPopulated] = useState([]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Comics">
          <Comics
            favoriteComicsIdList={favoriteComicsIdList}
            setFavoriteComicsIdList={setFavoriteComicsIdList}
            favoriteComicsPopulated={favoriteComicsPopulated}
            setFavoriteComicsPopulated={setFavoriteComicsPopulated}
          />
        </Route>
        <Route path="/FavoriteComics">
          <FavoriteComics
            favoriteComicsIdList={favoriteComicsIdList}
            favoriteComicsPopulated={favoriteComicsPopulated}
          />
        </Route>
        <Route path="/FavoriteCharacters">
          <FavoriteCharacters
            favoriteCharactersList={favoriteCharactersList}
            setFavoriteCharactersList={setFavoriteCharactersList}
            favoriteCharactersPopulated={favoriteCharactersPopulated}
            setFavoriteCharactersPopulated={setFavoriteCharactersPopulated}
          />
        </Route>
        <Route exact path="/CharacterDetails/:characterId">
          <CharacterDetails />
        </Route>
        <Route exact path="/Favorites">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Characters
            favoriteCharactersList={favoriteCharactersList}
            setFavoriteCharactersList={setFavoriteCharactersList}
            favoriteCharactersPopulated={favoriteCharactersPopulated}
            setFavoriteCharactersPopulated={setFavoriteCharactersPopulated}
          />
        </Route>
      </Switch>
    </Router>

    // <div className="App">
    //   HELLO REACT APP
    //   <Characters />
    //   <hr></hr>
    //   <Comics/>
    // </div>
  );
}

export default App;
