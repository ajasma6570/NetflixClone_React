import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import Youtube from "react-youtube";
import axios from "../../axios";
import "./Banner.css";
import BannerShimmer from "../Shimmer/BannerShimmer";

export default function Banner() {
  const [movie, setMovie] = useState();
  const [urlId, setUrlId] = useState("");
  const [isLoading,setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((Response) => {
        console.log(Response.data);
        setMovie(Response.data.results[2]);
        setLoading(false)
      });
  }, []);

  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      try {
        if (Response.data.results.length !== 0) {
          console.log(Response.data.results[0]);
          setUrlId(Response.data.results[0]);
         
        } else {
          console.log("Trailer not available");
        }
      } catch (error) {
        console.log(error);
      }
    })
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
    {/* Shimmer container */}
    {isLoading && <BannerShimmer />}
  {/* Shimmer container End */}
  
    {!isLoading && (
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
            <button className="button" onClick={()=>handleMovie(movie.id)}>
              Play
            </button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
 ) }
      {urlId && (
        <div className="playerContainer">
          <Youtube opts={opts} videoId={urlId.key} />
          <button
            style={{ float: "right", backgroundColor: "grey", width: "50px"}}
            className="closeButton"
            onClick={() => setUrlId('')}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
