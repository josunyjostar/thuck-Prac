import React, { useState } from "react";
import { addTodo, toggleTodo } from "../modules/todos";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

const TodoItem = React.memo(function TodoItem({ todo }) {
    const dispatch = useDispatch();
    const onToggle = useCallback(
        (id) => {
            dispatch(toggleTodo(id));
        },
        [dispatch],
    );

    return (
        <li style={{ textDecoration: todo.done ? "line-through" : "none" }} onClick={() => onToggle(todo.id)}>
            {todo.text}
        </li>
    );
});

export const TodoList = React.memo(function TodoList() {
    const todos = useSelector((state) => state.todos);

    return (
        <ul>
            {todos.map((v) => (
                <TodoItem key={v.id} todo={v} />
            ))}
        </ul>
    );
});

function Todos({ todos, onCreate }) {
    // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
    const [text, setText] = useState("");
    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
        onCreate(text);
        setText(""); // 인풋 초기화
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} placeholder="할 일을 입력하세요.." onChange={onChange} />
                <button type="submit">등록</button>
            </form>
        </div>
    );
}

export default Todos;
