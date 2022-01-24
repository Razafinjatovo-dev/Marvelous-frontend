import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import LoaderSpinner from '../Loader/LoaderSpinner';
import "./CharacterDetails.css";

const CharacterDetails = (props) => {
    const {Url} = props
    const {characterId} = useParams();
    const [comicsList, setcomicsList] = useState();
    const [characterName, setCharacterName] = useState();
    const [characterPictureUrl, setCharacterPictureUrl] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // console.log("Id personnage " + characterId);
    //fetch data
    useEffect(() => {
        const fetchComicsList = async () => {
            const response = await axios.get(
                `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=40D67RDGCM1a6Bfj`
            );
            //   console.log(response.data.comics);
            setCharacterName(response.data.name);
            setCharacterPictureUrl(
                response.data?.thumbnail.path + "." + response.data.thumbnail.extension
            );
            setcomicsList(response.data.comics);
            setIsLoading(false);
        };
        fetchComicsList();
    }, [characterId]);

    return isLoading === true ? (
        <LoaderSpinner/>
    ) : (
        <div className="MainContent_GlobalWrapper">
            <div className="CharacterDetails_pictureWrapper">
                <img src={characterPictureUrl} alt="characterPhoto"/>
            </div>
            <p className="CharacterName">{characterName}</p>
            <h3>COMICS LIST</h3>
            <div className='ComicsList_Wrapper'>
                {comicsList.map((comic, index) => {
                    return (
                        <div className="Comic_Card" key={index}>
                            <div className='ComicPicture_Wrapper'>
                                <img src={comic.thumbnail.path +
                                "." +
                                comic.thumbnail.extension} alt="ComicPicture"/>
                            </div>
                            <p className="ComicTitle">{comic.title}</p>
                            <p className="ComicDescription">{comic.description && `Description ${comic.description}`}</p>
                            {/* <p>Description: {comic.description}</p> */}
                            <hr></hr>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CharacterDetails;
