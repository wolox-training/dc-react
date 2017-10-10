import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import filtersCss from './css/filters.css';

class Filters extends React.Component {

  state = {
    type: '',
    value: ''
  }

  handleSelect = (e) => {
    this.setState({type: e.target.value});
  }

  handleClick = (e) => {
    this.setState({value: e.target.value});
  }

  handleSearch = () => {
    this.props.filter(this.state.value, this.state.type)
  }

  render(){
    return (
      <div className='flex'>
        <select className='inputFilter filter-select' onChange={this.handleSelect}>
          <option disabled selected>Seleccionar filtro</option>
          <option value='title'>Titulo</option>
          <option value='author'>Autor</option>
        </select>
        <input ref= 'value' className='inputFilter' type='text' placeholder='Buscar...' onChange={this.handleClick}/>
        <buttom className='buttomFilter' onClick={this.handleSearch}>
          <div className='magnifier-icon'>&#9906;</div>
        </buttom>
      </div>
    )
  }
}

Filters.defaultProps  = {
  type: 'title',
  value: ''
}

Filters.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
}

export default Filters;
