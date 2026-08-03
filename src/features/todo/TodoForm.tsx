import Button from "../../shared/ui/Button.tsx";
import type {TodoFromProps} from "./types.ts";
import {useState} from "react";

const TodoForm = ({onAdd, inputRef}: TodoFromProps) => {

    const[text, setText] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        if(text.trim() !== "") {
            onAdd(text);
            setText("");
            console.log(text);
        }
    }

    return (
        <>
            <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={inputRef}
                    value={text}
                    onChange={handleChange}
                    className="flex-1 border p-2 rounded"
                    placeholder="New Task..."
                />
                <Button label="Add"/>
            </form>
        </>
    )
}
export default TodoForm;