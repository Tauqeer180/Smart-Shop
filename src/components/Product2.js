import React, { Component } from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import img1 from '../assets/images/men3.jpg';
import img2 from '../assets/images/woo.jpg';
import img3 from '../assets/images/woo1.jpg';
import img4 from '../assets/images/woo.jpg';
import MyCarousel from './Carousel';
import {add_to_cart} from '../store/actions/action';
class Product2 extends Component {
  constructor(props){
    super(props )
    this.state =    { 
        size:'',
        qty:'1',
        price:''
    };
  }
  componentDidMount=()=> {
    
    
  }
  handleSize(e){
      this.setState({size: e.target.name,
         price: e.target.value})

    //   alert(e.target.value);
  }
  handleQuantity(e){
      this.setState({qty: e.target.value})
  }
  handleSubmit(e){
      console.log(e.target.value.product);
      const newC = {id:e.target.value,size:this.state.size,price:this.state.price, qty: this.state.qty};
      (!this.state.size)?alert('Please Select Size'):
    // let ppp = document.getElementById('11');
      this.props.add_cart(newC);
    //   console.log(newC);
      this.setState({size:''})
     
  }
  render(){
      let id = this.props.match.params.id;
      let products = this.props.products;
      let cart = this.props.cart;
    //   console.log( cart)
    return (
        <div className="App">
{/* // <!--breadcrumbs area start--> */}
    <div class="breadcrumbs_area">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="index-2.html">home</a></li>
                            <li>Product details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    {/* // <!--breadcrumbs area end--> */}
    
    {/* // <!--product details start--> */}
    <div class="product_details mt-60 mb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <MyCarousel/>

                </div>
                <div class="col-lg-6 col-md-6">
    {products.map((product,Index)=>{
        return(
            (product.id == id )?
            
            <div class="product_d_right">
                       {/* <form> */}
                           
                            <h1>{product.title}</h1>
                            <div class=" product_ratting">
                                <ul>
                                    <li><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li><a href="#"><i class="fa fa-star"></i></a></li>
                                    <li class="review"><a href="#"> (250 reviews) </a></li>
                                </ul>
                                
                            </div>
                            <div class="price_box">
                                <span class="current_price"  >Rs{(this.state.size == 'small')?product.s.price  :(this.state.size == 'medium')?product.m.price:(this.state.size == 'large')?product.l.price:''}</span>
                                <span class="old_price">$80.00</span>
                                
                            </div>
                          
                            <div className="size-box">
                           <span className="h3"> Size: </span> <span></span>
                           {(product.s)?    <button  onClick={this.handleSize.bind(this)} value={product.s.price} style={this.state.size === 'small'?{backgroundColor:'green'}:null} name='small' className="disable badge capitalize btn ">small</button>:''}
                <span></span> {(product.m)?    <button onClick={this.handleSize.bind(this)} value={product.m.price} style={this.state.size === 'medium'?{backgroundColor:'green'}:null} name='medium' className="badge capitalize btn ">medium</button>:''}
                <span></span> {(product.l)?    <button onClick={this.handleSize.bind(this)} value={product.l.price} style={this.state.size === 'large'?{backgroundColor:'green'}:null} name='large' className="badge capitalize btn ">large</button>:''}
                                {/* <button onClick={this.handleSize.bind(this)}  value="medium" className="capitalize"><span className="badge"> medium</span></button>
                               <p className='badge' onClick={this.handleSize.bind(this)} value="large">Large </p>
<span></span> <span value='text' className="badge p-5 m-5" onClick={(e)=>this.setState({size:e.target.value})}>text here</span> */}
                            </div>
                            <div class="product_desc">
                                <ul>
                                    <li>In Stock</li>
                                </ul>
                                <p>{product.des}</p>
                            </div>
							<div class="product_timing">
                                <div data-countdown="2023/12/15"></div>
                            </div>
                            <div class="product_variant color">
                                <h3>Available Options</h3>
                                <label>color</label>
                                <ul>
                                    <li class="color1"><a href="#"></a></li>
                                    <li class="color2"><a href="#"></a></li>
                                    <li class="color3"><a href="#"></a></li>
                                    <li class="color4"><a href="#"></a></li>
                                </ul>
                            </div>
                           
                            <div class="product_variant quantity">
                                <label>quantity{this.state.quantity} </label>
                                <input min="1" max="5" id='12' value={this.state.qty} onChange={this.handleQuantity.bind(this)}  type="number" />
                                <button class="button" value={product.id} name={document.getElementById(11)}  type="submit" onClick={this.handleSubmit.bind(this) }>add to cart</button>  
                                
                            </div>
                            <div class=" product_d_action">
                               <ul>
                                   <li><a href="#" title="Add to wishlist">+ Add to Wishlist</a></li>
                                   {/* <li><a href="#" title="Add to wishlist">+ Compare</a></li> */}
                               </ul>
                            </div>
                            <div class="product_meta">
                                <span>Category: <a href="#">Clothing</a></span>
                            </div>
                            
                        {/* </form> */}
                        <div class="priduct_social">
                            <ul>
                                <li><a class="facebook" href="#" title="facebook"><i class="fa fa-facebook"></i> Like</a></li>           
                                <li><a class="twitter" href="#" title="twitter"><i class="fa fa-twitter"></i> tweet</a></li>           
                                <li><a class="pinterest" href="#" title="pinterest"><i class="fa fa-pinterest"></i> save</a></li>           
                                <li><a class="google-plus" href="#" title="google +"><i class="fa fa-google-plus"></i> share</a></li>        
                                <li><a class="linkedin" href="#" title="linkedin"><i class="fa fa-linkedin"></i> linked</a></li>        
                            </ul>      
                        </div>

                    </div>
            :''
        )
    })}

                </div>
            </div>
        </div>    
    </div>
    // {/* <!--product details end--> */}
    
    // {/* <!--product info start--> */}
    <div class="product_d_info mb-60">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="product_d_inner">   
                        <div class="product_info_button">    
                            <ul class="nav" role="tablist">
                                <li >
                                    <a class="active" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Description</a>
                                </li>
                                <li>
                                     <a data-toggle="tab" href="#sheet" role="tab" aria-controls="sheet" aria-selected="false">Specification</a>
                                </li>
                                <li>
                                   <a data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (1)</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="info" role="tabpanel" >
                                <div class="product_info_content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                    <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
                                </div>    
                            </div>
                            <div class="tab-pane fade" id="sheet" role="tabpanel" >
                                <div class="product_d_table">
                                   <form action="#">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="first_child">Compositions</td>
                                                    <td>Polyester</td>
                                                </tr>
                                                <tr>
                                                    <td class="first_child">Styles</td>
                                                    <td>Girly</td>
                                                </tr>
                                                <tr>
                                                    <td class="first_child">Properties</td>
                                                    <td>Short Dress</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                                <div class="product_info_content">
                                    <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                </div>    
                            </div>

                            <div class="tab-pane fade" id="reviews" role="tabpanel" >
                                <div class="reviews_wrapper">
                                    <h2>1 review for Donec eu furniture</h2>
                                    <div class="reviews_comment_box">
                                        <div class="comment_thmb">
                                            <img src="assets/img/blog/comment2.jpg" alt="" />
                                        </div>
                                        <div class="comment_text">
                                            <div class="reviews_meta">
                                                <div class="star_rating">
                                                    <ul>
                                                        <li><a href="#"><i class="ion-ios-star"></i></a></li>
                                                        <li><a href="#"><i class="ion-ios-star"></i></a></li>
                                                        <li><a href="#"><i class="ion-ios-star"></i></a></li>
                                                        <li><a href="#"><i class="ion-ios-star"></i></a></li>
                                                        <li><a href="#"><i class="ion-ios-star"></i></a></li>
                                                    </ul>   
                                                </div>
                                                <p><strong>admin </strong>- September 12, 2018</p>
                                                <span>roadthemes</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="comment_title">
                                        <h2>Add a review </h2>
                                        <p>Your email address will not be published.  Required fields are marked </p>
                                    </div>
                                    <div class="product_ratting mb-10">
                                       <h3>Your rating</h3>
                                        <ul>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                            <li><a href="#"><i class="fa fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product_review_form">
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-12">
                                                    <label for="review_comment">Your review </label>
                                                    <textarea name="comment" id="review_comment" ></textarea>
                                                </div> 
                                                <div class="col-lg-6 col-md-6">
                                                    <label for="author">Name</label>
                                                    <input id="author"  type="text" />

                                                </div> 
                                                <div class="col-lg-6 col-md-6">
                                                    <label for="email">Email </label>
                                                    <input id="email"  type="text" />
                                                </div>  
                                            </div>
                                            <button type="submit">Submit</button>
                                         </form>   
                                    </div> 
                                </div>     
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        </div>    
    </div>
    </div>
    

  );
}
}
function mapDispatchToProps(dispatch){
    return({
        add_cart: (newC)=>{
            dispatch(add_to_cart(newC));
        }
    })
}
function mapStateToProps(state){
    return{

        products: state.products.product_red,
        cart: state.cart.cart_red,
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Product2);
