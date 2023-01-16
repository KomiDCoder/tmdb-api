import { useEffect, useRef, useState } from "react";
import { ActorListStyle } from "./style";
import { swipe } from "../../utils/swipe";
import api from "../../utils/api";
export const ActorsList = ({ title }) => {
  const scrolledUL = useRef(0);
  const [actors, setActors] = useState([]);
  async function getApi() {
    const res = await api.get("/trending/person/week", {
      params: {
        api_key: "2760fed262dbab217c1265988686eb53",
      },
    });
    setActors(res.data.results);
  }
  function renderFarm() {
    return actors.map((item, i) => {
      const {
        profile_path,
        name,
        popularity,
        known_for_department,
        gender,
        known_for,
      } = item;
      return (
        <li key={i}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt="actor_poster"
          />
          <h3>{name}</h3>
          <div className="card-hover-data">
            <p>{`Gender : ${gender > 1 ? "Male" : "Female"}`}</p>
            <p>{`Department : ${known_for_department}`}</p>
            <p>{`Popularity : ${popularity} person`}</p>
            <p className="best-movies">
              {" Best Movies : "}
              {known_for.map((item, i) => {
                return <span key={i}>{item.title}</span>;
              })}
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
    <ActorListStyle>
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
    </ActorListStyle>
  );
};
export default ActorsList;
