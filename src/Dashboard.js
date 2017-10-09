import React from 'react';
import booksJson from './assets/books.json';
import BookThumbnail from './BookThumbnail';
import dashboardCss from './css/dashboard.css';
import Filters from './Filters';

class Dashboard extends React.Component {
  constructor(){
    super();
    this.state = {
      filterValue: '',
      filterType:''
    }
  }

  handleFilterValue(value, type){
    this.setState({
      filterValue: value,
      filterType: type
    });
  }

  render(){
    let books = this.state.filterValue === '' ?
                booksJson :
                booksJson.filter(book => book[this.state.filterType].toLowerCase().includes(this.state.filterValue.toLowerCase()));
    let booksThumnails = books.map(book => <BookThumbnail key={book.id} id={book.id} title={book.title} author={book.author} imgSrc={book['image_url']}/>);

    return (
      <div className='flex-column dashboard-container'>
        <Filters filter={this.handleFilterValue.bind(this)} />
        <div className='book-container flex'>
        {booksThumnails}
        </div>
      </div>
    )
  }
}
export default Dashboard;
