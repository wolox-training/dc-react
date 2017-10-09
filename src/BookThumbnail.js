import React from 'react';
import bookThumbnailCss from './css/bookThumbnail.css';
import { Link } from 'react-router-dom';

class BookThumbnail extends React.Component {
  constructor(){
    super()
    this.state = {
      loaded: true
    }
  }
  updateOnLoad(){
    this.setState({loaded: false})
  }

  render(){
    return (
      <Link to={`/books/${this.props.id}`} className='flex-column thumbnail'>
        {
          this.state.loaded && this.props.imgSrc !== null ?
          <img className='thumbnail-img' src={this.props.imgSrc} onError={this.updateOnLoad.bind(this)}/> :
            <div className='thumbnail-img default-img'></div>
        }
        <b className='thumbnail-text'>{this.props.title}</b>
        <span className='thumbnail-text'>{this.props.author}</span>
      </Link>
    )
  }
}
export default BookThumbnail;
