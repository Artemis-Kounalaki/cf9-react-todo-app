export type Todo = {
    id: number,
    text: string,
    completed: boolean,
}

export type TodoFromProps = {

    inputRef: React.RefObject<HTMLInputElement | null>;
}