import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import "./RowPost.css";

export default function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {
        setMovies(Response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((Response) => {
        try {
          if (Response.data.results.length !== 0) {
            setUrlId(Response.data.results[0]);
          } else {
            console.log("Trailer not available");
          }
        } catch (error) {
          console.log(error);
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            key={obj.id}
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="Poster"
          />
        ))}
      </div>

      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}
