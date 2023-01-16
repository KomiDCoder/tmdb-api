import { useEffect, useState, useRef } from "react";
import { searchGenre } from "../../utils/genre";
import { AllMovieTVStyle } from "./style";
import { swipe } from "../../utils/swipe";
import api from "../../utils/api";
export const AllList = ({ title }) => {
  const [allMovieTV, setAllMovieTV] = useState([]);
  const scrolledUL = useRef(0);
  async function getApi() {
    const res = await api.get("/trending/all/week", {
      params: {
        api_key: "2760fed262dbab217c1265988686eb53",
      },
    });
    setAllMovieTV(res.data.results);
  }

  function renderFarm() {
    return allMovieTV.map((item, i) => {
      console.log(item);
      const {
        title,
        poster_path,
        genre_ids,
        media_type,
        vote_average,
        vote_count,
      } = item;
      return (
        <li className="actor" key={i}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="actor_poster"
          />
          <h3>{item.hasOwnProperty("name") ? item.name : title}</h3>
          <div className="card-hover-data">
            <p>Type : {media_type}</p>
            <div>
              <h4>Genre</h4>
              <p className="genre">{searchGenre(genre_ids)}</p>
            </div>

            <p className="rating">
              rating : <span>{vote_average.toFixed(2)}</span>
              <span>{`(${vote_count})`}</span>
            </p>
          </div>
        </li>
      );
    });
  }
  useEffect(function () {
    getApi();
  }, []);
  return (
    <AllMovieTVStyle>
      <h2 className="title">{title}</h2>
      <div className="carousel-buttons">
        <span
          className="crsl-button"
          onClick={(event) => {
            swipe(event, scrolledUL);
          }}
        >
          {"<"}
        </span>
        <span
          className="crsl-button"
          onClick={(event) => {
            swipe(event, scrolledUL);
          }}
        >
          {">"}
        </span>
      </div>
      <ul ref={scrolledUL}>{renderFarm()}</ul>
    </AllMovieTVStyle>
  );
};
export default AllList;
