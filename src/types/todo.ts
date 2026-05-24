export type TodoItemTypes = {
    id: number,
    content: string
}

export type WriteTodoType = Omit<TodoItemTypes, 'id'>
