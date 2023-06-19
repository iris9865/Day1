import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({onCreate}: any) => {
  const [content, setContent] = useState("");
  const inputRef = useRef<any>();
  const onChangeContent = (e: any) => {
    setContent(e.target.value);
  }
const onSubmit = () => {
  if(!content) {  //입력란에 아무것도 없으면 component에 아무것도 들어가지 말기(투두리스트에 업로드 안 되기)
    inputRef.current.focus();
    return;
  }
  onCreate(content);
  setContent("");
}

const onKeyDown = (e: any) => {
  if(e.keyCode === 13) { //엔터가 아스키코드로 13이다
    onSubmit(); //엔터시, 투두리스트에 업로드
  }
}
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기🖍 </h4>
      <div className="editor_wrapper">
        <input onKeyDown={onKeyDown} ref={inputRef} onChange={onChangeContent} value={content} type="text" placeholder="새로운 Todo..." />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

export default TodoEditor;