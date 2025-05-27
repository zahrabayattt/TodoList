const CategoryTask = ({ task, handleChangeValues, addTask}) => {

  function handleSubmit(e) {
    e.preventDefault()
    addTask()
    showAlert("Well Done!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <select className="category-Option"
        name="category"
        value={task.category}
        onChange={handleChangeValues}
        required
      >
        <option value="">Select category</option>
        <option value="Groceries">Groceries</option>
        <option value="College">College</option>
        <option value="Payments">Payments</option>
      </select>
      <button type="submit" className="category-Add">
        Add Task
      </button>
      {console.log(task)}
    </form>
  )
}

export default CategoryTask
