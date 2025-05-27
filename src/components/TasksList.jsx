const TasksList = ({ tasksList, deleteTask, completeTask,selectedCategory}) => {
  return (
    <div className="task-List">
      {tasksList.filter(task => selectedCategory === 'All' ||task.category === selectedCategory)
      .map((task) => (
        <div className = "task-Item">
          <div className="task-Content">
            <input type="checkbox" checked={task.isDone} onChange={() => completeTask(task.id)} className="checkbox checkbox-error"/>
            <p className={`task-Title ${task.isDone ? 'line-through' : ''}`}>
              {task.title}
            </p>
            <span className="task-Category">{task.category}</span>
          </div>
          <img src="./Vector.png" alt="" onClick={() => deleteTask(task.id)}/>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
