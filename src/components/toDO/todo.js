import React, { useEffect, useState } from "react";
import useForm from "../form";
import { v4 as uuid } from "uuid";
import List from "../list/list";
import "./todo.css";
import Form from "../form/form";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log('jjjjjjjjjy😎',item);
    item.id = uuid();
    item.complete = false;
    console.log('list🥱',list)
    setList([...list, item]);

  }
//del function🩸
  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    //change the list after delete 
    setList(items);
  }
//toggleComplete  function 
  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        console.log(item)
        //to reverse the value 🔀
        item.complete = !item.complete;
      }
      return item;
    });
//change data inside list 
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <header>
        <nav
          className="bp3-navbar .modifier "
          style={{ color: "rgb(121, 115, 115)", backgroundColor: "#270b27f6" ,textAlign:"center"}}
        >
          <h3>To Do List Manger: ({incomplete}) Items Pending</h3>
        </nav>
      </header>
      <div className="div-flex">
         <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
        <div>
          <List list={list}  toggleComplete={toggleComplete} deleteItem={deleteItem}/>
        </div>
      </div>
    </>
  );
};

export default ToDo;