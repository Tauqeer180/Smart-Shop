export default (state = INITIAL_STATE, action)=> {
	switch(action.type){
		case 'getCategory':
		return {
			...state
		}
		default:
			return state
	}
	
};

const INITIAL_STATE = {
	navbar_red: [
		{main:'men', sub:['pent','shirt']},
		{main:'women', sub:['stitched','mackeup']},
		{main:'crafts', sub:['wooden','drEss']},
		{main:'mobiles', sub:[]},
		

		],
	
}