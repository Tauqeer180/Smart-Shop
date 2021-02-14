export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
    case 'getState':
        return {
            ...state
        }
    case 'addToCart':
            return{
                ...state,
                cart_red:[...state.cart_red, action.payload]
        }
    case 'qtyPlus':
            return{
                ...state,
                cart_red: [...state.cart_red.map((data,Index)=>{
                    return(
                        // alert('clcked')
                    (data.id == action.payload)?
                    {id:data.id, size: data.size, qty: ++data.qty, price: data.price}: data
                    )
                })
            ]
            }
            case 'qtyMinus':
            return{
                ...state,
                cart_red: [...state.cart_red.map((data,Index)=>{
                    return(
                        // alert('clcked')
                    (data.id == action.payload && data.qty>1)?
                    {id:data.id, size: data.size, qty: data.qty - 1, price: data.price}: data
                    )
                })
            ]
            }
    default:
            return state;
}
}
const INITIAL_STATE = {
    cart_red:[  
    // {id:1,size:'m',qty:2, price:'136'},   
    // {id:2, size:'l', qty:1,price:'130'}   
]
}