//Base code from Tyler Potts on Youtube
import React from "react";

export default function AnimeDisplayer({ anime }) {
  return (
    <article className="anime-displayer">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <div className="anime-score">
          Viewer Score: <strong>{anime.score}/10</strong> (Rated{" "}
          <strong>{anime.rated}</strong>)
        </div>
        <div className="anime-episodes">
          <strong>Episodes: {anime.episodes}</strong>
        </div>
        <div className="anime-image">
          <img src={anime.image_url} alt="Anime Poster" />
        </div>
        <div className="anime-desc">
          <strong>Description:</strong> {anime.synopsis}
        </div>
        <h2>
          <strong>| {anime.title} |</strong>
        </h2>
      </a>
    </article>
  );
}
