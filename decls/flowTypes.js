declare type Todo = {
    _id: number,
    title: string,
    completed: boolean,
};

declare type State = {
    todos: {
        editMode: {
            mode: boolean,
            todo: Todo,
        },
        isFetching: boolean,
        todos: [Todo],
    },
    form: Object,
};