import React, { Component } from 'react';
import {connect} from 'react-redux';
class Checkout extends Component{
    render(){
        let cart = this.props.cart;
        console.log(cart);
        return(
        <div class="checkout" style={{marginTop:90}}>
       

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    {/* <div class="checkout-right">	 */}
				{/* <div>
				<div class="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
					<a href="mens.html"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Back To Shopping</a>
				</div>
                <div class="checkout-right-basket animated wow slideInRight" data-wow-delay=".5s">
                    <a href="mens.html">
                    Proceed To checkOut
                        <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                    </a>
                </div>
                </div> */}
				<div class="checkout-left-basket animated wow slideInLeft checkout-basket" data-wow-delay=".5s">
					<h4>Shopping basket</h4>
					<ul>
                        {cart.map((c, Index)=>{
                            return(
                                <li>{c.title} <b>*</b> {c.qty} <span> {c.price * c.qty} </span></li>
                            )
                        })}
                        <li>Hand Bag <b>*</b> 2 <span>$45.99</span></li>
						<li>Watches <b>*</b> 1 <span>$45.99</span></li>
						<li>Sandals <b>*</b> 3 <span>$45.99</span></li>
						<li>Wedges <b>*</b> 1 <span>$45.99</span></li>
						<li>Total <b>*</b> 1 <span>$183.96</span></li>
					</ul>
				</div>
				{/* <div class="clearfix"> </div> */}
			
                    </div>
                    <div className="col-md-6">
                        <form role="form" className="  form-group form-block form-responsive">
                        <div className="form-group has-error">
                            <label  for="c-name">Name :</label>
                            <input type="text" id="c-name" className=" form-control" placeholder="Enter Your Name Here" />
                        </div>
                        <div className="form-group">

                            <label for="c-mobile">Mobile No:</label>
                            <input type="number" id="c-mobile" className="form-control" placeholder="Enter Your Name Here" />
</div>       
<div className="form-group">

                            <label for="c-mail">E-Mail :</label>
                            <input type="mail" id="c-mail" className="form-control" placeholder="Enter Your Name Here" />
      </div>
                            <div className="form-group">
                            
                            <label for="c-adress">Address :</label>
                            <input type="address" id="c-address" className="form-control" placeholder="Enter Your Name Here" />

                        </div>
                        <button type="submit" className="btn btn-success float-left">Proceed To Checkout</button>
                        </form>
                    </div>

                </div>

            </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        cart: state.cart.cart_red
    }
}
export default connect(mapStateToProps, null)(Checkout);