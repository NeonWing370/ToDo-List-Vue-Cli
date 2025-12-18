<template>
  <div class=" card-task ">
    <div>
      <router-link :to="`/task/${task.id}`" class="fw-bold">
        {{ task.title }}
      </router-link>
      <p class="mb-1">{{ task.description }}</p>
      <span :class="task.completed ? 'text-success' : 'text-warning'">
        {{ task.completed ? 'Завершено' : 'Активне' }}
      </span>
    </div>

    <div class="mt-2">
      <button class="btn btn-sm btn-success me-2" @click="toggle">
        ✓
      </button>
      <button class="btn btn-sm btn-danger" @click="remove">
        ✕
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'

const props = defineProps({
  task: Object
})

const store = useTaskStore()

const toggle = () => store.toggleTask(props.task.id)
const remove = () => store.deleteTask(props.task.id)
</script>