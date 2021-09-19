import React, { useEffect, useState } from 'react';
import useForm from '../hooks/form';

import { v4 as uuid } from 'uuid';


import { SettingsContext } from '../context/handleState';
import {useContext} from 'react';


    

const ToDo = (props) => {

    const site = useContext(SettingsContext);
    console.log("ssssssssssssssssite)",site)
//   const [list, setList] = useState([]);
//   const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...site.list, item]);
  }

  function deleteItem(id) {
    const items = site.list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = site.list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${site.incomplete}`;
  }, [site.list]);

  return (
    <>
      <header>
        <h1>To Do List: {site.incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      {site.list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

    </>
  );
};

export default ToDo;