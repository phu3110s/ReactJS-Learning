import React from "react";
import PropTypes from "prop-types";
import Anime from "../Anime";
import "./styles.scss";
AnimeList.propTypes = {
  nimeList: PropTypes.array.isRequired,
};

function AnimeList({ animeList }) {
  return (
    <ul className="anime-list">
      {animeList.map((anime) => (
        <li key={anime.id}>
          <Anime anime={anime} />
        </li>
      ))}
    </ul>
  );
}

export default AnimeList;
