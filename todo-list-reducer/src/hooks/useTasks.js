import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
function useTasks() {
    const initialState = [];

    function reducer(state = initialState, action) {
        debugger;
        switch (action.type) {
            case "ADD_TODO":
                return [...state, { id: uuidv4(), text: action.payload.text }];
            case "Remove":
                return state.filter(task => task.id !== action.payload.id)
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return {
        state,
        dispatch,
    }
}

export default useTasks;