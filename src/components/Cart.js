import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {update_to_cart, qtyPlus, qtyMinus} from '../store/actions/action'
// import logo from './logo.svg';
// import './App.css';
import logo3 from '../assets/images/logo3.jpg';
import baner from '../assets/images/baner1.jpg';

class Cart extends Component {
	constructor(props){
		super(props )
		this.state =    { 
				
			};
		}
		Plus=(id)=>{
		this.props.qty_Plus(id);
		
		// alert('clicked')
	}
	Minus=(id)=>{
		this.props.qty_Minus(id);
	}
  render(){
	  let cart = this.props.cart;
	  
	  let products = this.props.products;
	  console.log( products)
  return (
    <div className="App">
   <div class="checkout" style={{marginTop:90}}>
	<div class="container">
		<h3>My Shopping Bag</h3>
		<div class="table-responsive checkout-right animated wow slideInUp" data-wow-delay=".5s">
			<table class="timetable_sub table-striped table-condensed table-responsive">
				<thead>
					<tr>
						<th></th>
						<th>Product</th>
						<th>Product Name</th>		
                        <th>Unit Price</th>
						<th>Qty</th>
						<th>Total Price</th>
					</tr>
				</thead>
				{products.map((product,Index)=>{
					return(
						
						cart.map((c)=>{
							return((product.id == c.id)?
							<tr class="rem1">
						<td class="invert-closeb">
							<div class="rem">
								<div class="close1"> </div>
							</div>
							
						</td>
						<td class="invert-image">
                            <a href="single.html">
                                <img src={logo3} alt=" " class="img-responsive" />
                            </a>
                        </td>
						<td class="invert capitalize">{product.title} ({c.size})</td>
						<td class="invert">{c.price }</td>
						<td class="invert">
							 <div class="quantity"> 
								<div class="quantity-select">              
								<div className="btn-group-vertical border">
									<input type="button" className="btn btn-success bold" value="+"
									onClick={()=>this.Plus(c.id) }/>
						<span type="number" className="btn" value="1">{c.qty}</span>
									<input type="button" className="btn btn-danger" value="-"
									onClick={()=>this.Minus(c.id) }/>
									</div>             
									{/* <div class="entry value-minus">&nbsp;</div>
									<div class="entry value"><span>1</span></div>
									<div class="entry value-plus active">&nbsp;</div> */}
								</div>
							</div>
						</td>
						<td class="invert">{c.price * c.qty}</td>
					</tr>
					 :'')
						
						})
				)})
			}
					
					{/* <tr class="rem2">
						<td class="invert-closeb">
							<div class="rem">
								<div class="close2"> </div>
							</div>
							
						</td>
						<td class="invert-image"><a href="single.html"><img src="images/ep3.png" alt=" " class="img-responsive" /></a></td>
						<td class="invert">Watches</td>
						<td class="invert">4596</td>
						<td class="invert">
							 <div class="quantity"> 
								<div class="quantity-select">                           
									<div class="entry value-minus">&nbsp;</div>
									<div class="entry value"><span>1</span></div>
									<div class="entry value-plus active">&nbsp;</div>
								</div>
							</div>
						</td>
						<td class="invert">4599</td>
					</tr>
					 */}
					
								
			</table>
		</div>
		<div className="row">
			<div className="col-md-6"><div class="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
                    <Link to='/checkout'>
                    Proceed To checkOut
                      <span></span>  <span class="glyphicon glyphicon-menu-right m-5" aria-hidden="true"></span>
                    </Link>
                </div></div>
		</div>
		{/* <div class="checkout-left">	
				<div>
				<div class="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
					<a href="mens.html"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Back To Shopping</a>
				</div>
                <div class="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
                    <a href="mens.html">
                    Proceed To checkOut
                        <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                    </a>
                </div>
                </div>
				<div class="checkout-left-basket animated wow slideInLeft" data-wow-delay=".5s">
					<h4>Shopping basket</h4>
					<ul>
						<li>Hand Bag <b>*</b>(2) <span>$45.99</span></li>
						<li>Watches <i>-</i> <span>$45.99</span></li>
						<li>Sandals <i>-</i> <span>$45.99</span></li>
						<li>Wedges <i>-</i> <span>$45.99</span></li>
						<li>Total <i>-</i> <span>$183.96</span></li>
					</ul>
				</div>
				<div class="clearfix"> </div>
			</div> */}
	</div>
</div>
    </div>
  );
}
}
function mapDispatchToProps(dispatch){
	return({
		qty_Plus: (id)=>{
			dispatch(qtyPlus(id));
		},
		qty_Minus: (id)=>{
			dispatch(qtyMinus(id));
		}
	})
}
function mapStateToProps(state){
	return{
		cart: state.cart.cart_red,
		products: state.products.product_red,
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
