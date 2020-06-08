const initialState = { counter: 0 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                counter: state.counter + 1
            }
        case "MINUS":
            return {
                counter: state.counter - 1
            }
        case "DEC":
            return {
                counter: state.counter - action.value
            }
        case "INC":
            return {
                counter: state.counter + action.value
            }
    }
    return state;
}

export default reducer;