const getters = {
    doneTodo(state){
        return state.todos.filter(todo=>todo.done);
    }
};

export default getters;
