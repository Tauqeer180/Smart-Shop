import React, { Component } from 'react'
import { connect } from 'react-redux'
import img1 from '../assets/images/a1.png'
import MyCarousel from './Carousel'
import Pager from './Pager'
import { Link } from 'react-router-dom'
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thumbs_css: 'false',
      name: '',
    }
  }
  //   handleChange=(e)=>{ this.setState({name : e.target.value})};

  render() {
    let products = this.props.products
    return (
      <div className='App'>
        <MyCarousel thumbs={false} />
        <div class='new_arrivals'>
          <div class='container'>
            <h3>
              <span>new </span>arrivals
            </h3>
            <div className='row'>
              {products.map((product, Index) => {
                return (
                  <div
                    key={Index}
                    className='col-md-3 col-sm-4 col-6 col-xs-6 product-men yes-marg'
                  >
                    <div class='men-pro-item simpleCart_shelfItem'>
                      <div class='men-thumb-item'>
                        <img src={img1} alt='' class='pro-image-front' />
                        <img src={img1} alt='' class='pro-image-back' />
                        <div class='men-cart-pro'>
                          <div class='inner-men-cart-pro'>
                            <Link
                              to={'/Detail/' + product.id}
                              id={product.id}
                              class='link-product-add-cart'
                            >
                              Quick View
                            </Link>
                          </div>
                        </div>
                        <span class='product-new-top'>New</span>
                      </div>
                      <div class='item-info-product '>
                        <h4>
                          <a href='single.html'>{product.title}</a>
                        </h4>
                        <div class='info-product-price'>
                          <span class='item_price'>{product.m.price}</span>
                          <del>$69.71</del>
                        </div>
                        <Link
                          to={'/Detail/' + product.id}
                          id={product.id}
                          class='item_add single-item hvr-outline-out button2'
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Pager />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    products: state.products.product_red,
  }
}
export default connect(mapStateToProps, null)(Index)
