import React, { useEffect, useState, useContext } from "react";
import useForm from "../form";
import { v4 as uuid } from "uuid";
import List from "../list/list";
import "./todo.css";
import Form from "../form/form";
import { SettingsContext } from "../../context/contaxt";
const ToDo = () => {
  const settings = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  //method to add item 
  function addItem(item) {
    console.log('item🎉', item);
    // add the id and complete proprites to object that contain item 
    item.id = uuid();
    item.complete = false;
    console.log('list🥱', list)
    //example about list containt 
    //{enter: ' cvvv', assignee: ' zxcvbnm,', id: '0d2da2e5-90eb-457f-ae5d-885910cd4d3b', complete: false}
    setList([...list, item]);

  }
  //del function🩸
  function deleteItem(id) {
    //return all item expect the item deleted 
    const items = list.filter((item) => item.id !== id);
    //change the list after delete 
    setList(items);
  }
  //toggleComplete function 
  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        console.log(item)
        //to reverse the value from true to false and reverse 🔀
        item.complete = !item.complete;
      }
      return item;
    });
    //change data inside list 
    setList(items);
  }
  console.log('listttttttttttttttt', list)

  useEffect(() => {
    //filter the task to return incomplete task
    let incompleteCount = list.filter((item) => !item.complete);
    console.log('item not complete 😥',incompleteCount)
    //store incomplete task inside incomplete array 
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete.length}`;
  }, [list, settings.show]);

  return (
    <>
      <header>
        <nav
          className="bp3-navbar .modifier "
          style={{ color: "rgb(121, 115, 115)", backgroundColor: "#270b27f6", textAlign: "center" }}
        >
          
        </nav>
      </header>
      <div className="div-flex">
     <div style={{width:"500px"}}>
      
          <h2>To Do List: {incomplete.length} Items Pending, and {list.length - incomplete.length} Completed</h2>
          </div>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div>

          <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} incomplete={incomplete} />
        </div>
      </div>
    </>
  );
};

export default ToDo;