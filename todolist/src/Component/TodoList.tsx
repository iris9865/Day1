import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({todo, onUpdate, onDelete}:any) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
  } 
  const getSearchresult = () => { 
    return search === "" ? todo : todo.filter((it:any)=>it.content.toLowerCase().includes(search.toLowerCase())) //만약에 검색창이 빈 칸이라면, todo의 모든 리스트들이 나올 수 있게 하고 , 그게 아니면 필터링 해서 결과값이 나오게 해라 그리고 소문자로 검색해도 대문자값이 나올 수 있게 해라
  };
  return (
    <div className="TodoList">
      <h4>Todo List😎</h4>
      <input onChange={onChangeSearch} value={search} type="text" className="searchbar" placeholder="검색어를 입력하세요"/>
      <div className="list_wrapper">
        {getSearchresult().map((it: any) => (<TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>))}
      </div>
    </div>
  )
}

export default TodoList;