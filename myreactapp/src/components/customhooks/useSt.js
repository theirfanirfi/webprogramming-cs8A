let state: any;

function useSt(value){
	
	state = value;
	const changeData = (val) => {
		state = val;
	}

	return [state, changeData];
}

export default useSt;