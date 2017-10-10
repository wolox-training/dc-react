import React from 'react';
import bookThumbnailCss from './css/bookThumbnail.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const BookThumbnail = (props) => {
  return (
    <Link to={`/books/${props.id}`} className='flex-column thumbnail'>
      {
        (props.imgSrc !== null) ? (
          <img className='thumbnail-img' src={props.imgSrc} />
        ) : (
          <div className='thumbnail-img default-img'></div>
        )
      }
      <span className='thumbnail-title'>{props.title}</span>
      <span className='thumbnail-text'>{props.author}</span>
    </Link>
  )
}

BookThumbnail.propTypes = {
  id: PropTypes.number,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
}
export default BookThumbnail;
