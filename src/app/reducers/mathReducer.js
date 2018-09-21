 const mathReducer = (state = {
    result: 1,
    
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                
            };
            break;
    }
    return state;
};

export default mathReducer