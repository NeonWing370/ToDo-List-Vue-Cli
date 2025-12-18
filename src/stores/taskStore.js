import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    filter: 'all'
  }),

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