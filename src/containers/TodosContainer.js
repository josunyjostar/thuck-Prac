import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";
import { TodoList } from "../components/Todos";
function TodosContainer() {
    // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
    // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
    const dispatch = useDispatch();
    const onCreate = (text) => dispatch(addTodo(text));

    return (
        <div>
            <Todos onCreate={onCreate} />
            <TodoList />
        </div>
    );
}

export default TodosContainer;
