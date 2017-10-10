import React from 'react';
import booksJson from './assets/books.json';
import { Link } from 'react-router-dom';
import detailsCss from './css/details.css';
import user from './assets/user.png';

const Details = (props) =>{
  const bookId = props.match.params.id;
  let book = booksJson.filter(book => book.id === parseInt(bookId))[0];

  return(
    <div>
      <Link to='/dashboard' className='back-link'>&#60;volver</Link>
      <div className='flex-column dashboard-container'>
        <div className='flex details-container'>
          {
            (book['image_url'] !== null) ? (
              <img className='img-book-details' src={book['image_url']}/>
            ) : (
              <div className='detail-default default-img'></div>
            )
          }
          <div className='flex-column book-info-container'>
            <h2>{book.title}</h2>
            <span>{book.author}</span>
            <span>{book.year}</span>
            <p className='book-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <input type='button' className='btn btn-blue' value='Alquilar' />
          </div>
        </div>
       <div className='flex-column details-container'>
        <h3 className='details-titles'>Sugerencias</h3>
        <div className='flex'>
          <div className='suggestion-book-icon'></div>
          <div className='suggestion-book-icon'></div>
          <div className='suggestion-book-icon'></div>
          <div className='suggestion-book-icon'></div>
        </div>
       </div>
       <div className='flex-column'>
        <h3 className='details-titles'>Comentarios</h3>
        <div className='flex text-editor'>
          <img src={user} className='user-chat'/>
          <div className='flex-column'>
            <b className='comment-title'>Agregar comentario</b>
            <textarea className='text-chat'></textarea>
            <input type='buttom' value='Enviar' className='btn btn-green'/>
          </div>
        </div>
        <div>
          <div className='flex text-editor'>
            <img src={user} className='user-chat'/>
            <div className='flex-column'>
              <b className='comment-title'>Kimberly Carter</b>
              <p className='comment-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Details;
