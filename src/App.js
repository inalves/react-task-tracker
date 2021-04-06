import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor's Appointment",
        day: "Feb 5th at 2pm",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at school",
        day: "Feb 5th at 2pm",
        reminder: true
    },
    {
        id: 3,
        text: "Food shopping",
        day: "Feb 5th at 2pm",
        reminder: true
    },
    {
        id: 4,
        text: "Take out the trash",
        day: "Feb 5th at 2pm",
        reminder: true
    }
])

//DELETE TASK
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//TOGGLE REMINDER
const toggleReminder = (id) => {
  setTasks(
    tasks.map((tk) => 
      tk.id === id ? {...tk, reminder: !tk.reminder} : tk))
}

//ADD TASK
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} toggleButton={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to show"}
    </div>
  );
}

export default App;