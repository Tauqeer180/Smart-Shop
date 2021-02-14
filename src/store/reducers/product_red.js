export default (state= INITIAL_STATE, action)=>{
    switch(action.type){
        case 'getAllProducts':
            return{ ...state}
        default:
            return state
    }
};
 const INITIAL_STATE = {
    product_red : [
        {id:1,main_c: 'women', sub_c:'jewelry', title:'Ring', des: 'this is a description of following product', Qty:12, s:{price:136}, m:{price:140}, l:{price:146}},
        {id:2,main_c: 'women', sub_c:'jewelry', title:'braclet', des: 'this is a description of following product', Qty:12, s:{price:136}, m:{price:140}, l:{price:146}},
        {id:3,main_c: 'women', sub_c:'jewelry', title:'neckless', des: 'this is a description of following product', Qty:12, s:{price:136}, m:{price:140}, l:{price:146}},
    ]
 }