const initialState = {
    todos: []
};

const todos =  (state= initialState, action) => {
    switch(action.type){
        case 'ADD_TODO' :
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        message: action.message,
                        id: action.id
                    },
                ],
            } ;
        case 'DEL_TODO' :
            
                const todos = state.todos.filter((todo) => todo.id !== action.id)
                return {
                    ...state,
                    todo:todos,
                }
                default:
                    return state;

    }
}

export default todos
