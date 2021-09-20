

function List(props) {
  console.log("list", props.list);
  return (
    <div className="list-container">
      {props.list.map((item) => (
        <div key={item.id}>
          {console.log(item.id)}
          <h6>Todo Item: {item.text}</h6>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty ? item.difficulty : 3}</small>
          </p>

          <br />
          <button className="delete-btn" variant="danger" onClick={() => props.deleteItem(item.id)}>
            Delete
          </button>

            <button
              onClick={() => props.toggleComplete(item.id)}
              variant="warning"
            >
              Complete: {item.complete ? "done" : "pending"}
            </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default List;