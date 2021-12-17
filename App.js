//Base code from Tyler Potts on Youtube
import "./App.css";
import { useState } from "react";
import Title from "./Title";
import Form from "./Form";

export default function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  const fetchAnime = async (name) => {
    const search = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${name}`
    ).then((res) => res.json());

    setAnimeList(search.results);
  };

  return (
    <div className="App">
      <Title />
      <div className="allContent">
        <Form
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}
