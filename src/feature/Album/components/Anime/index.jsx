import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
Anime.propTypes = {
  anime: PropTypes.object.isRequired,
};

function Anime({ anime }) {
  return (
    <div className="anime">
      <div className="anime_image">
        <img src={anime.url} height="10%" alt={anime.name}></img>
      </div>
      <p className="anime_name">{anime.name}</p>
    </div>
  );
}

export default Anime;
