<template>
  <form @submit.prevent="submitForm" class="card card-task mb-3">
    <input
      v-model="title"
      class="form-control mb-2"
      placeholder="Task title"
    />

    <textarea
      v-model="description"
      class="form-control mb-2"
      placeholder="Task description"
    ></textarea>

    <div v-if="error" class="text-danger mb-2">{{ error }}</div>

    <button class="btn btn-primary">Додати завдання</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()

const title = ref('')
const description = ref('')
const error = ref('')

const submitForm = () => {
  if (!title.value.trim() || !description.value.trim()) {
    error.value = 'Треба заповнити всі поля'
    return
  }

  store.addTask({
    id: Date.now(),
    title: title.value,
    description: description.value,
    completed: false
  })

  title.value = ''
  description.value = ''
  error.value = ''
}
</script>