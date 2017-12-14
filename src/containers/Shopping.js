import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import { listProduct } from '../actions'

import Flex from '../components/Flex'
import ProductCard from '../components/ProductCard'

class Shopping extends Component {

  componentDidMount() {
    this.props.listProduct()
  }

  renderProducts () {
    return _.map(this.props.app.products, product => (
      <ProductCard key={product.id}
        name={product.name}
        description={product.description}
        price={product.price} />
    ))
  }

  render () {
    return (
      <Flex className="main-container">
        { this.renderProducts() }
      </Flex>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ listProduct }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopping)