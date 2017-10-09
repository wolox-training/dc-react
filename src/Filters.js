import React from 'react';
import ReactDOM from 'react-dom'
import filtersCss from './css/filters.css';

class Filters extends React.Component {
  constructor(){
    super();
    this.state = {
      type: 'title',
      value: ''

    }
  }

  handleSelect(e){
    this.setState({type: e.target.value});
  }

  handleClick(e){
    this.setState({value: e.target.value});
  }
  handleSearch(){
    this.props.filter(this.state.value, this.state.type)
  }

  render(){
    return (
      <div className='flex'>
        <select className='inputFilter' onChange={this.handleSelect.bind(this)}>
          <option disabled selected>Seleccionar filtro</option>
          <option value='title'>Titulo</option>
          <option value='author'>Autor</option>
        </select>
        <input ref= 'value' className='inputFilter' type='text' placeholder='Buscar...' onChange={this.handleClick.bind(this)}/>
        <buttom className='buttomFilter' onClick={this.handleSearch.bind(this)}>
          <div className='magnifier-icon'>&#9906;</div>
        </buttom>
      </div>
    )
  }
}

export default Filters;
