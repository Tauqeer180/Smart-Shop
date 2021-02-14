export function get_category(){
	return{
		// console.log('console from acrion')
			type:'getCategory'
	}
}
export function add_to_cart(newC){
	return dispatch => {
		dispatch({
			type:'addToCart',
			payload: newC
		})
	}
}
export function update_to_cart(newC, index){
	return dispatch =>{

		dispatch({
			type:'updateCart',
			payload: newC,
			Index:index
		})
	}
}
export function qtyPlus(id){
	return dispatch => {
		dispatch({
			type:'qtyPlus',
			payload:id
		})
	}
}
export function qtyMinus(id){
	return dispatch => {
		dispatch({
			type:'qtyMinus',
			payload:id
		})
	}
}