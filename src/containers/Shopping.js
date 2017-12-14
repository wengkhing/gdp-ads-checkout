import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import { listProduct } from '../actions'

import Flex from '../components/Flex'
import ProductCard from '../components/ProductCard'
import CheckoutForm from '../components/CheckoutForm'

import './Shopping.scss'

class Shopping extends Component {

  state = {
    redirect: false
  }

  renderRedirect() {
    if (!this.props.app.user)
      return <Redirect to="/" />
  }

  componentDidMount() {
    this.props.listProduct()
  }

  renderProducts () {
    return _.map(this.props.app.products, product => (
      <ProductCard key={product.id}
        product={product} />
    ))
  }

  render () {
    return (
      <Flex className="main-container bottom-padded">
        { this.renderProducts() }
        { this.renderRedirect() }
        <CheckoutForm />
      </Flex>
    );
  }
}

function mapStateToProps({ app }) {
  return { app };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ listProduct }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopping)