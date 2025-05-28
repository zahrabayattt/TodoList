import { useState ,useEffect } from "react"
import AddTask from "./components/AddTask"
import SideBar from "./components/SideBar"
import TasksList from "./components/TasksList"

function App() {
  const [task, setTask] = useState({ id:'' , title: '', category: '' , isDone: false})
  const [tasksList, setTasksList] = useState(() => {
    const savedTasks = localStorage.getItem("tasksList")
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [showCategoryForm, setShowCategoryForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || 'All';
  });
  const [alert, setAlert] = useState('');

  function handleChangeValues(event) {
    const { name, value } = event.target
    setTask(prev => ({ ...prev, [name]: value }))
  }

  function addTask() {
    if (task.title.trim() && task.category){
      const newTask = {...task,id:Date.now()}
      setTasksList(prev => [...prev, newTask])
      setTask({id: '', title: "", category: "", isDone: false })
      setShowCategoryForm(false)
      showAlert("Task Created Successfully")
    }
  }

  function deleteTask (id) {
    setTasksList(prev =>prev.filter(task => task.id !== id))
    showAlert("Task Deleted Successfully")
  }

  function completeTask(id) {
    setTasksList(prev => prev
      .map(task =>task.id === id ? ( !task.isDone && showAlert("Well Done! Task Completed :)"), { ...task, isDone: !task.isDone } ): task));
  }
  
  function handleCategoryValues(category) {
    setSelectedCategory(category);
  }

  function showAlert(message) {
    setAlert(message);
    setTimeout(() => {
      setAlert('');
    }, 2000);
  }
  useEffect(() => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList))
  }, [tasksList])

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container">
      <div className="task-Page">
        <div className="sidebar">
          <SideBar handleCategoryValues={handleCategoryValues} selectedCategory={selectedCategory} />
        </div>
        <div>
          {alert && (<div role="alert" className="alert alert-error alert-outline">
            <span>{alert}</span>
            </div>)}
          <h1>All Tasks</h1>
          <AddTask task={task} addTask={addTask} handleChangeValues={handleChangeValues} showCategoryForm={showCategoryForm} setShowCategoryForm={setShowCategoryForm}/>
          <TasksList tasksList={tasksList} deleteTask={deleteTask} completeTask={completeTask} selectedCategory={selectedCategory}/>
        </div>
      </div>
    </div>
  )
}

export default App
