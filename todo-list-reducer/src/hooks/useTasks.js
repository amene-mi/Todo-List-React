import { useReducer } from 'react';

function useTasks() {
    let id = 1;
    const initialState = [];

    function reducer(state = initialState, action) {
        switch (action.type) {
            case "ADD_TODO":
                return [...state, { id: id++, text: action.payload.text }];
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