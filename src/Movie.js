import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

const Movie = ({ title, poster, category, year }) => {
  return (
    <div className='Movie'>
      <div className='Movie__Columns'>
        <h1>{title}</h1>
        <div className='Movie__Categorys'>
          <span className='Movie__Category'>{category}</span>
        </div>
        <div className='Movie__Year'>
          {year}
        </div>
      </div>
      <div className='Movie__Columns'>
        <MoviePoster url={poster} />
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

function MoviePoster({ url }) {
  return (
    <img src={url} alt='이미지가 없습니다...' />
    // <h2>이미지가 없습니다. </h2>
  );
}

MoviePoster.propTypes = {
  url: PropTypes.string.isRequired
}

export default Movie;