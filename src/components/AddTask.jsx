import CategoryTask from "./CategoryTask";

const AddTask = ({ task, handleChangeValues, addTask, showCategoryForm, setShowCategoryForm}) => {
  function handleKeyDown(e) {
    if (e.key === "Enter" && task.title.trim() !== "") {
      e.preventDefault()
      setShowCategoryForm(true)
    }
  }
  return (
    <div>
      <input className="input-Task"
        type="text"
        placeholder="Add a new task inside ‘All’ category"
        id="title"
        name="title"
        value={task.title}
        onChange={handleChangeValues}
        onKeyDown={handleKeyDown}
      />
      {showCategoryForm && (<CategoryTask task={task} handleChangeValues={handleChangeValues} addTask={addTask}/>)}
    </div>
  )
}

export default AddTask
