import { useState } from "react";
import TodoList from "./TodoList";
import InputField from "./InputField";
import './App.css';
import { addTodo } from "store/todoSlice";
import { useDispatch } from "react-redux";


function App() {

const [text, setText]= useState('');

const dispatch = useDispatch();
const addTask =()=> {dispatch(addTodo({text}))
setText('')};



return(
  <div className="App">
 
  <InputField text={text} handelInput={setText} handelSubmit={addTask}/>
  <TodoList/>
  </div>
);
}

export default App;
