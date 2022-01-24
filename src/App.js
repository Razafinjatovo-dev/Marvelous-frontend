import "./App.css";
// import Cookies from "js-cookie";
import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Characters from "./Containers/Characters/Characters";
import Comics from "./Containers/Comics/Comics";
import Header from "./Containers/Headers/Header";
import CharacterDetails from "./Components/CharacterDetails/CharacterDetails";
import FavoriteCharacters from "./Components/FavoriteCharacters/FavoriteCharacters";
import FavoriteComics from "./Components/FavoriteComics/FavoriteComics";
import Favorites from "./Containers/Favorites/Favorites";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faHeart, faSearch} from "@fortawesome/free-solid-svg-icons";
import LoaderSpinner from "./Components/Loader/LoaderSpinner";

library.add(faHeart, faSearch);

function App() {
    //Characters Favorites
    const Url = "https://marvelous-backend.herokuapp.com";
    // const Url = "https://lereacteur-marvel-api.herokuapp.com/";
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
            <Header/>
            <Switch>
                <Route path="/Comics">
                    <Comics
                        Url={Url}
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
                    <CharacterDetails Url={Url}/>
                </Route>
                <Route exact path="/Favorites">
                    <Favorites/>
                </Route>
                <Route exact path="/">
                    <Characters
                        Url={Url}
                        favoriteCharactersList={favoriteCharactersList}
                        setFavoriteCharactersList={setFavoriteCharactersList}
                        favoriteCharactersPopulated={favoriteCharactersPopulated}
                        setFavoriteCharactersPopulated={setFavoriteCharactersPopulated}
                    />
                </Route>
                <Route path="/Loader">
                    <LoaderSpinner/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
