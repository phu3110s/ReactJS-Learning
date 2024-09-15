import React from "react";
import AnimeList from "../components/AnimeList";

function AnimeFeature() {
  const animeList = [
    {
      id: 1,
      name: "sasakoi",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBl7YagwIAT8kM3r_oLLtjTpNEasYtFXdD7Q&s",
    },
    {
      id: 2,
      name: "shiosatou",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GSt94sg-beAez997amgS5mEzWiecThsP9Q&s",
    },
    {
      id: 3,
      name: "mahiru",
      url: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/3d7dbae873e5958948f4958ff2081c8f.jpe",
    },
  ];

  return (
    <div>
      <h2>Nơi làm wibu</h2>
      <AnimeList animeList={animeList} /> {/* Pass animeList as a prop */}
    </div>
  );
}

export default AnimeFeature;
