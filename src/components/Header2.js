import {connect} from 'react-redux';
import {get_category} from '../store/actions/action';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import baner from '../assets/images/baner1.jpg';
import logo3 from '../assets/images/logo3.jpg';
// import logo from './logo.svg';
import logo1 from '../assets2/images/logo.png';
// import './App.css';
import '../assets2/css/bootstrap.min.css';
import '../assets2/css/main.css';
// import '../assets2/css/blue.css';
// import '../assets2/css/owl.carousel.css';
// import '../assets2/css/owl.transitions.css';
// import '../assets2/css/font-awesome.css';
// import '../assets2/css/animate.min.css';
// import '../assets2/css/rateit.css';
// import '../assets2/css/bootstrap-select.min.css';
{/* <link rel="stylesheet" href="assets2/css/main.css">
<link rel="stylesheet" href="assets2/css/blue.css">
<link rel="stylesheet" href="assets2/css/owl.carousel.css">
<link rel="stylesheet" href="assets2/css/owl.transitions.css">
<link rel="stylesheet" href="assets2/css/animate.min.css">
<link rel="stylesheet" href="assets2/css/rateit.css">
<link rel="stylesheet" href="assets2/css/bootstrap-select.min.css"></link> */}



class Header2 extends Component {
	constructor(){
		super();
		this.state = {
			sideNav:{ left:'-100%', opacity:1},
			fiancy:{width:'0%'}
		}
	}
	openNav=()=> {
		// alert('hellp');
		console.log('clicked')
		// this.setState({sideNav:{ left:'0', opacity:1}})
		// this.setState({fiancy:{ width:'100%'}})
		// alert('hello');
		document.getElementById("mySidenav").style.left = "0";
		document.getElementById("mySidenav").style.opacity = "1";
		document.getElementById("fiancy").style.opacity = "0.3";
		document.getElementById("fiancy").style.width = "100%";
	
	}
	 closeNav=()=> {
		document.getElementById("mySidenav").style.left = "-100%";
		document.getElementById("mySidenav").style.opacity = "0";
		document.getElementById("fiancy").style.width = "0%";
		
	}
  componentDidMount(){
    // this.props.get_category();
    // console.log('componentDidMount');
  }
	
  render(){
 let cat = this.props.navbar;
 let sub = this.props.navbar.sub;
 let cart = this.props.cart
 let cart_price =0;
 {cart.map((p)=>{ 
   

     cart_price += parseInt( p.price)
   
 })}
   console.log(cart_price)
  return (
    <div className="App">
    {/* <!-- ============================================== HEADER ============================================== --> */}
		<header class="header-style-1 fixed"> 
  
  {/* <!-- ============================================== TOP MENU ============================================== --> */}
  
  {/* <!-- /.header-top -->  */}
  {/* <!-- ============================================== TOP MENU : END ============================================== --> */}
   {/* <!--Start Sticky Menu====--> */}
			<div class="container-fluid hide main-header" id="12345" style={{position: 'fixed', paddingTop:'5px'}}>
  				<div class="row" style={{paddingLeft: '0px'}}>
					{/* <div class="col-xs-1 col-sm-1"> */}
{/* <!-- Mobile Nav Menu -->  */}
{/* <!-- Use any element to open the sidenav --> */}
						{/* <span id="mmenu-button" class="smenubtn btn" onClick={this.openNav}  >&#9776;</span> */}
					{/* </div> */}
					<div class="col-sm-9 col-xs-9" style={{color: 'white', margin: '0px',padding: '0px 5px'}}>
					<div class="col-xs-12 col-sm-12 col-md-5 top-search-holder" style={{paddingRight:0}}> 
							<div class="search-area">
								<form class="form-inline">
								<div class="control-group">
									<input class="search-field" placeholder="Search here..."/>
									<a class="search-button" href="#"></a> 
								</div>
								</form>
							</div>
						</div>
					</div>
					<div class="col-xs-2 col-sm-2" style={{margin: '6px 0px', padding: '0px'}}>
						<a href="#" style={{color: 'white', textDecoration: 'none'}}>
							<span><i class="fa fa-shopping-cart" style={{color: 'white', fontSize: '25px', margin:'0px 10px'}}></i></span>
						</a>
					</div>
				</div>
			</div>
  {/* <!--End Sticky Menu--> */}
  <div class="main-header fixed">
    <div class="container">
      <div class="row"> 
    	 <div class="col-xs-12 col-sm-12 col-md-2 logo-holder" id="custom1"> 
          {/*  ============================================================= LOGO ============================================================= */}
         	 <div class="logo"> <Link to='/'> <img src={logo1} alt="logo"/> </Link> </div>
          {/* <!-- /.logo -->  */}
          {/* <!-- ============================================================= LOGO : END ============================================================= -->  */}
		  </div>
        {/* <!-- /.logo-holder --> */}
{/* <!-- small stuff --> */}
          		<div class="container-fluid" id="dragon">
                	<div class="row m-3">
                		<div class="col-xs-2 col-sm-1" style={{marginTop: '0px'}} >
                {/* <!-- Mobile Nav Menu -->  */}
							<div id="fiancy" className="fiancy" style={this.state.fiancy} onClick={this.closeNav}></div>
							<div id="mySidenav" class="sidenav" style={this.state.sideNav}>
								<div style={{color: 'white'}} class="navheader">
									<table width="100%" height="50px" class="">
										<tbody><tr><td class="tblock"><i style={{marginRight: '5px', fontSize: '20px'}} class="fa fa-user"></i>
											<div style={{fontSize: '15px'}}>Login &amp; Signup</div>
										</td><td width="40px"></td></tr></tbody>
									</table>
								</div>
								<a style={{color: 'white'}}  class="closebtn" onClick={this.closeNav}>&times;</a>
								<a href="#" style={{display: 'block', width: '100%'}}><div><i class="fa fa-user  "></i><span class="smenua">Sofa Covers</span></div> </a>
								<a href="#" style={{display: 'block', width: '100%'}}><div><i class="fa fa-truck "></i><span class="smenua">Curtains</span></div> </a>
								<a href="#" style={{display: 'block', width: '100%'}}><div><i class="fa fa-car "></i><span class="smenua">Sofa Cloth</span></div> </a>
								<a href="#" style={{display: 'block', width: '100%'}}><div><i class="fa fa-user  "></i><span class="smenua">Home & Living</span></div> </a>
								<a href="#" style={{display: 'block', width: '100%'}}><div><i class="fa fa-bell "></i><span class="smenua">Sofa Covers</span></div> </a>
								<a href="#" style={{display: 'block', width: '100%'}}><div><i class="fa fa-gear  text-align: left;"></i><span class="smenua">Electronics</span></div> </a>
								<a href="#" style={{display: 'block', width: '100%'}}><div><i class="fa fa-mobile "></i><span class="smenua">Mobiles</span></div> </a>
							</div>
                {/*  <!-- Use any element to open the sidenav --> */}
                			<span class="smenubtn"  href="#"><input type='button' onClick={this.openNav} className="btn btn-primary" value="&#9776;"/></span>
                {/* <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page --> */}
               			</div>
				
						<div class="col-xs-3 col-sm-3 col-md-1 logo-holder" id="dragon"> 
          {/* <!-- ============================================================= LOGO ============================================================= --> */}
          					<div class="logo"> <a href="home.html"> <img src={logo1} alt="logo" /> </a> </div>
		  {/* <!-- ==== LOGO : END ============================= -->*/}
		   				</div> 
        {/* <!-- /.logo-holder --> */}
					<div class="col-xs-3 col-sm-2" style={{color: 'white', margin: '0px', float: 'right'}}>
					<a href="tel:03419492200" style={{color: 'white', textDecoration: 'none', paddingRight: '4px',fontSize:'24px'}}><span className="glyphicon glyphicon-earphone"></span></a>
						{/* <!--<a href="#" style="color: white; text-decoration: none; padding-right: 4px;"><span><i class="far fa-heart" style="color: white;"></i></span></a>
						<a href="#" style="color: white; text-decoration: none; padding-right:4px;"><i class="far fa-user" style="color: white;"></i><span></span></a>--> */}
						<a href="#" style={{color: 'white', textDecoration: 'none', fontSize:'28px'}}><span><i class="fa fa-shopping-cart" style={{color: 'white'}}></i></span></a>
					</div>
</div>
</div>
        <div class="col-xs-12 col-sm-12 col-md-5 top-search-holder"> 
          {/* <!-- /.contact-row -->  */}
          {/* <!-- ============================================================= SEARCH AREA ============================================================= --> */}
          <div class="search-area">
            <form>
              <div class="control-group">             
                <input class="search-field" placeholder="Search here..."/>
                <a class="search-button" href="#"></a> </div>
            </form>
          </div>
          {/* <!-- /.search-area -->  */}
          {/* <!-- ============================================================= SEARCH AREA : END ============================================================= -->  */}
		  </div>
        {/* <!-- /.top-search-holder --> */}
         <div class="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row"  id="custom1"> 
          {/* <!-- ============================================================= SHOPPING CART DROPDOWN ============================================================= --> */}
          <div class="dropdown dropdown-cart" > <Link to='/cart' class="dropdown-toggle lnk-cart" >
            <div class="items-cart-inner">
              <div class="basket"> <i class="glyphicon glyphicon-shopping-cart"></i> </div>
              <div class="basket-item-count"><span class="count">{cart.length}</span></div>
              <div class="total-price-basket"> <span class="lbl"></span> <span class="total-price"> <span class="sign text-white">Rs:</span><span class="value">{cart_price}</span> </span> </div>
            </div>
            </Link>
            {/* <ul class="dropdown-menu">
              <li>
                <div class="cart-item product-summary">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="image"> <a href="detail.html"><img src="assets/images/cart.jpg" alt=""/></a> </div>
                    </div>
                    <div class="col-xs-7">
                      <h3 class="name"><a href="index.php?page-detail">Simple Product</a></h3>
                      <div class="price">$600.00</div>
                    </div>
                    <div class="col-xs-1 action"> <a href="#"><i class="fa fa-trash"></i></a> </div>
                  </div>
                </div>
               
                <div class="clearfix"></div>
                <hr/>
                <div class="clearfix cart-total">
                  <div class="pull-right"> <span class="text">Sub Total :</span><span class='price'>$600.00</span> </div>
                  <div class="clearfix"></div>
                  <a href="checkout.html" class="btn btn-upper btn-primary btn-block m-t-20">Checkout</a> </div>
               
              </li>
            </ul> */}
            {/* <!-- /.dropdown-menu-->  */}
          </div>
          {/* <!-- /.dropdown-cart --> */}
          {/* <!-- ============================================================= SHOPPING CART DROPDOWN : END============================================================= --> */}
		   </div>
 <div class="col-xs-12 col-sm-12 col-md-3" id="custom1">
          <ul style={{listStyle: 'none', display: 'inline-block', marginTop: '15px'}}>
          <li style={{listStyle: 'none', display: 'inline-block', paddingRight: '15px', paddingTop: '4px'}}><a href="#" style={{color: 'white'}}><i class="icon far fa-user"  style={{padding: '5px'}} ></i>My Account</a></li>
            <li style={{listStyle: 'none', display: 'inline-block'}}><a href="#" style={{color: 'white'}}><i class="icon far fa-heart" style={{padding: '5px'}}></i>Wishlist</a></li>
          </ul>
        </div>
        {/* <!-- /.top/-cart-row -->  */}
      </div>
      {/* <!-- /.row -->  */}
    </div>
    {/* <!-- /.container -->  */}
  {/* <!-- /.main-header -->  */}
  {/* <!-- ============================================== NAVBAR ============================================== --> */}
  <div class="header-nav animate-dropdown" id="custom1" style={{marginTop: '4px'}}>
    <div class="container">
      <div class="yamm navbar navbar-default" role="navigation">
        <div class="navbar-header">
       <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" class="navbar-toggle collapsed" type="button"> 
       <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        </div>
        <div class="nav-bg-class">
          <div class="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
            <div class="nav-outer">
              <ul class="nav navbar-nav">
              <li class="dropdown"> <Link to = '/'>home</Link> </li>


              { cat.map((m_data)=>{
                return(
                 <li key={m_data.main.index} defaultValue={m_data} class="dropdown yamm mega-menu"> 
                 <a href="home.html" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">{m_data.main} 
                    {(m_data.sub.length>1)?  
                    <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="dropdownarrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="black" class="_3Der3h"></path></svg>
                  :''}
                 </a>
                {(m_data.sub.length>1)?
                 <ul class="dropdown-menu container">
                   <li>
                     <div class="yamm-content ">
                       <div class="row">
                         <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                           <h2 class="title">{m_data.main}</h2>
                           <ul class="links">
                             {m_data.sub.map((s_data)=>{
                                return(<li><a href="#">{s_data}</a></li>)
                             })}
                             
                           </ul>
                         </div>
                         <div class="col-xs-12 col-sm-6 col-md-4 col-menu banner-image"> <img class="img-responsive" src="assets/images/banners/banner.jpg" alt="" style={{width: '100%', paddingBottom: '25px'}}/> </div>
                       </div>
                     </div>
                   </li>
                 </ul>
                 :''}
               </li>
              )})
              }

                {/* <li class="dropdown  navbar-right special-menu"> <a href="#"><b>Todays offer</b></a> </li> */}
              </ul>
              {/* <!-- /.navbar-nav --> */}
              <div class="clearfix"></div>
            </div>
            {/* <!-- /.nav-outer -->  */}
          </div>
          {/* <!-- /.navbar-collapse -->  */}
        </div>
        {/* <!-- /.nav-bg-class -->  */}
      </div>
      {/* <!-- /.navbar-default -->  */}
    </div>
    {/* <!-- /.container-class --> */}
  </div>
  {/* <!-- /.header-nav -->  */}
  </div>
 
  {/* <!-- ============================================== NAVBAR : END ============================================== -->  */}
</header>

 {/* <!-- ============================================== HEADER : END ============================================== --> */}

    </div>
  );
}
}
function mapStateToProps(state){
  return({
    cart : state.cart.cart_red,
  navbar: state.navbar.navbar_red,
  })
}
function mapDispatchToProps(dispatch){
  return({
   
  })      
}
export default connect(mapStateToProps,null) (Header2);
