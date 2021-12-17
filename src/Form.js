//Base code from Tyler Potts on Youtube
import React from "react";
import AnimeDisplayer from "./AnimeDisplayer";

export default function Form(props) {
  return (
    <main>
      <div className="search-line">
        <form className="search-box">
          <input
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
          <button onClick={props.handleSearch}>Search!</button>
        </form>
      </div>
      <div className="anime-list">
        {props.animeList.map((anime) => (
          <AnimeDisplayer anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
}
