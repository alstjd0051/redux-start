import { useRef } from "react";



// container
export default function TodoForm({ add }) {
    const inputRef = useRef();

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={click}>추가</button>
        </div>
    );

    function click() {
        add(inputRef.current.value)
    }
}
