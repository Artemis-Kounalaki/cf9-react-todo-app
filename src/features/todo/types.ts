export type Todo = {
    id: number,
    text: string,
    completed: boolean,
}

export type TodoFromProps = {

    onAdd: (text: string) => void,
    inputRef: React.RefObject<HTMLInputElement | null>;

}