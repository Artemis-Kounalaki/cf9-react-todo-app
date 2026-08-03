import Button from "../../shared/ui/Button.tsx";
import type {TodoFromProps} from "./types.ts";

const TodoForm = ({inputRef}: TodoFromProps) => {
    return (
        <>
            <form className="flex gap-4 mb-4">
                <input

                    type="text"
                    ref={inputRef}
                    className="flex-1 border p-2 rounded"
                    placeholder="New Task..."
                />
                <Button label="Add"/>
            </form>
        </>
    )
}
export default TodoForm;