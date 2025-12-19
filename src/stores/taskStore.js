import { defineStore } from 'pinia'

const defaultTasks = [
  {
    id: 1,
    title: 'Перше завдання',
    description: 'Вмитися',
    completed: false
  },
  {
    id: 2,
    title: 'Друге завдання',
    description: 'Поїсти',
    completed: false
  },
  {
    id: 3,
    title: 'Третє завдання',
    description: 'Побажати собі гарного дня',
    completed: false
  }
]


export const useTaskStore = defineStore('tasks', {
  state: () => {
  const savedTasks = localStorage.getItem('tasks')

  return {
    tasks: savedTasks ? JSON.parse(savedTasks) : defaultTasks,
    filter: 'all'
  }
},

  getters: {
    filteredTasks(state) {
      if (state.filter === 'active') {
        return state.tasks.filter(task => !task.completed)
      }
      if (state.filter === 'completed') {
        return state.tasks.filter(task => task.completed)
      }
      return state.tasks
    }
  },

  actions: {
    saveToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
      
    },

    addTask(task) {
      this.tasks.push(task)
      this.saveToLocalStorage()
    },
    

    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
      this.saveToLocalStorage()
    },

    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.completed = !task.completed
        this.saveToLocalStorage()
      }
    },

    updateTask(updatedTask) {
      const index = this.tasks.findIndex(t => t.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = updatedTask
        this.saveToLocalStorage()
      }
    },

    setFilter(value) {
      this.filter = value
    }
  }
})
