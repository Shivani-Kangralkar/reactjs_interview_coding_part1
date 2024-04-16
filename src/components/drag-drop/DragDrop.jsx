import React, { useEffect, useState } from "react";
import "./drag-drop.css";

const DragDrop = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  // Api call
  const fetchListOfTodos = async () => {
    try {
      setLoading(true);
      const apiRes = await fetch("https://dummyjson.com/todos?limit=5&skip=0");
      const result = await apiRes.json();

      // console.log("result", result);
      if (result && result.todos && result.todos.length > 0) {
        setLoading(false);
        const updatedData = result.todos.map((item) => ({
          ...item,
          // status key is added to api with value "wip"
          status: "wip",
        }));
        setTodos(updatedData);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  // console.log("todos", todos);

  // function to drag , in (In progress). it gives the id. onDRagStart work for both "wip and completed"
  const onDragStart = (event, id) => {
    // console.log("event", event, id);
    event.dataTransfer.setData("id", id);
  };

  const renderTodos = () => {
    const list = {
      wip: [],
      completed: [],
    };
    todos.forEach((item) => {
      list[item.status].push(
        <div
          onDragStart={(event) => onDragStart(event, item.id)}
          draggable
          key={item.id}
          className="todo-card"
        >
          {/* display api data on screen in (in Progress section) */}
          {item.todo}
        </div>
      );
    });
    // console.log("list", list);
    return list;
  };

  const onDrop = (event, status) => {
    const id = event.dataTransfer.getData("id");
    // console.log(event.dataTransfer.getData('id'));

    let updatedTodos = todos.filter((item) => {
      if (item.id.toString() === id) {
        item.status = status;
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  // console.log("todos", todos);

  if(loading) return <h1>Loading data! Please wait</h1>

  return (
    <div className="drag-and-drop-container">
      <h1>Drag and Drop</h1>
      <div className="drag-and-drop-board">
        <div
          onDrop={(event) => onDrop(event, "wip")}
          onDragOver={(event) => event.preventDefault()}
          className="work-in-progress"
        >
          <h3>In Progress</h3>
          <div className="todo-list-wrapper">
            {/* Over here display data on In progress */}

            {renderTodos().wip}
          </div>
        </div>

        <div
          onDrop={(event) => onDrop(event, "completed")}
          onDragOver={(event) => event.preventDefault()}
          className="completed"
        >
          <h3>Completed</h3>
          <div className="todo-list-wrapper">
            {/* Over here display completed items */}
            {renderTodos().completed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
