import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import Youtube from "react-youtube";
import axios from "../../axios";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovie] = useState();
  const [urlId, setUrlId] = useState("");
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((Response) => {
        console.log(Response.data);
        setMovie(Response.data.results[18]);
      });
  }, []);

  const handleMovie = () => {
    setIsPlayerOpen(true);
    setUrlId("eKl7NyhV6VA");
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `URL(${
            movie ? imageUrl + movie.backdrop_path : ""
          })`,
        }}
        className="banner"
      >
        <div className="content">
          <h1 className="title">{movie ? movie.title : ""}</h1>
          <div className="banner-buttons">
            <button className="button" onClick={handleMovie}>
              Play
            </button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>

      {isPlayerOpen && (
        <div className="playerContainer">
          <Youtube opts={opts} videoId={urlId} />
          <button
            style={{ float: "right", backgroundColor: "grey", width: "50px"}}
            className="closeButton"
            onClick={() => setIsPlayerOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
