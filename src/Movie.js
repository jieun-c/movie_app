import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// class 대신 className 을 써주듯이
// label for 는 htmlFor 으로 써주어야한다.

// map에 있는 각각의 item은 key가 필요하다.
// 두번째 인자로 index를 받아온다.

function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => 
                        <li key={index} className="genres_genre">
                            {genre}
                        </li>
                    )}
                </ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;