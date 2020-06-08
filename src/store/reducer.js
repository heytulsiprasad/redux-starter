import { ADD, MINUS, DEC, INC, STORE_RESULT, DELETE_RESULT} from "./actions";

const initialState = { counter: 0, results: [] }


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                counter: state.counter + 1
            }
        case MINUS:
            return {
                ...state,
                counter: state.counter - 1
            }
        case DEC:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case INC:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case DELETE_RESULT:
            // const updatedArray = [...state.results];
            // updatedArray.splice(action.resultID, 1);
            const updatedArray = state.results.filter((result) => result.id !== action.resultELId)
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default reducer;