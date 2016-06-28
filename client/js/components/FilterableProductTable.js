import React from 'react'

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		filterText: '',
      	inStockOnly: false
  	} 
  	this.handleUserInput = this.handleUserInput.bind(this)
  }
  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }
  render() {
	return  <div>
		        <SearchBar filterText={this.state.filterText}
				           inStockOnly={this.state.inStockOnly}
				           onUserInput={this.handleUserInput}/>

		        <ProductTable filterText={this.state.filterText}
					          inStockOnly={this.state.inStockOnly} 
			        		  products={this.props.products} />
		    </div>

  }
}

export default FilterableProductTable;