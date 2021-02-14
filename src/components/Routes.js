import React, {Component} from 'react';
import {Switch,BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Route, Switch,HashRouter, Router } from "react-router-dom";

import Header from './Header';
import Header2 from './Header2';
import Index from './Index';
import Category from './Category'; 
import Product2 from './Product2';
import Product from './Product';
import MyCarousel from './Carousel';
import Cart from './Cart';
import Checkout from './Checkout';
class MyRoutes extends Component{
    render(){
        return(
            <div>

            <Router>
            <Header2/>
            <Switch>

                <div>
                    <Route exact path='/' component={Index} />
                    <Route path='/home' component={Index} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/checkout' component={Checkout} />
                    <Route path='/Detail/:id' component={Product2} />
                    <Route path='/category' component={Category} />
                </div>
            </Switch>
            </Router>
            </div>
        )
    }
}
export default MyRoutes;