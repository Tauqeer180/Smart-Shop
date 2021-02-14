import navbar_red from './navbar_red';
import product_red from './product_red';
import cart_red from './cart_red';
import {combineReducers} from 'redux';

export default combineReducers({
	navbar: navbar_red,
	products: product_red,
	cart: cart_red,
})