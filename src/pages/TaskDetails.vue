<template>
  <div v-if="taskCopy" class="card card-task">
    <input v-model="taskCopy.title" class="form-control mb-2" placeholder="Назва задачі" />
    <textarea v-model="taskCopy.description" class="form-control mb-2" placeholder="Опис задачі"></textarea>

    <label class="form-check mb-3">
      <input type="checkbox" v-model="taskCopy.completed" /> Завершено
    </label>

    <div class="task-buttons">
      <button class="btn btn-success" @click="save">Зберегти</button>
      <router-link to="/" class="btn btn-secondary">Повернутись</router-link>
    </div>
  </div>

  <div v-else>
    <p>Задача не знайдена 😕</p>
    <router-link to="/" class="btn btn-secondary">Повернутись</router-link>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useTaskStore } from '../stores/taskStore'
import { ref, computed, watch } from 'vue'

const router = useRouter()
const route = useRoute()
const store = useTaskStore()


const originalTask = computed(() =>
  store.tasks.find(t => t.id === Number(route.params.id))
)


const taskCopy = ref(originalTask.value ? { ...originalTask.value } : null)


watch(originalTask, (newTask) => {
  taskCopy.value = newTask ? { ...newTask } : null
})


const save = () => {
  if (!taskCopy.value) return
  store.updateTask(taskCopy.value)  
  router.push('/')
}
</script>
