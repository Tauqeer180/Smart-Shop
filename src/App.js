import React, { Component } from 'react';
// import logo from './logo.svg';

import './assets/css/custom.css';
import './assets/css/style2.css';
import './assets/css/style.css'; 
import './assets/css/pignose.layerslider.css';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

// import './assets/css/plugins.css';
import './assets/css/bootstrap.css';
// import './assets/css/jquery-ui.css';
// import './assets/css/flexslider.css';
// import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import Header from './components/Header';
import Header2 from './components/Header2';
import Index from './components/Index';
import Category from './components/Category'; 
import Product2 from './components/Product2';
import Product from './components/Product';
import MyCarousel from './components/Carousel';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import MyRoutes from './components/Routes';

import store from './store';
import {Provider} from 'react-redux';
class App extends Component {
  constructor(props){
    super(props )
  }
  
  render(){
  return ( 
   <Provider store={store}>

    <div className="App"> 
      <MyRoutes/>
      {/* <Header2/> */}
      {/* <MyCarousel/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Index/> */}
      {/* <Category/> */}
      {/* <Product2/>   */}
      {/* <Product/> */}
    </div>
    </Provider>
  );
}
}

export default App;
