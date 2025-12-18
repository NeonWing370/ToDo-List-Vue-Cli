<template>
  <div v-if="task" class="card card-task">
    <input v-model="task.title" class="form-control mb-2" />
    <textarea v-model="task.description" class="form-control mb-2"></textarea>

    <label class="form-check mb-3">
      <input type="checkbox" v-model="task.completed" /> Завершено
    </label>

    <div class="task-buttons">
      <button class="btn btn-success" @click="save">Зберегти</button>
      <router-link to="/" class="btn btn-secondary">Повернутись</router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useTaskStore } from '../stores/taskStore'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()
const store = useTaskStore()

const task = computed(() =>
  store.tasks.find(t => t.id === Number(route.params.id))
)

const save = () => {
  store.updateTask(task.value)
  router.push('/') 
}
</script>


