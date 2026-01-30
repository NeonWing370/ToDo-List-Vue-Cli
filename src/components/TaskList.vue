<template>
  <transition-group name="task" tag="div">
    <div
      v-for="task in store.filteredTasks"
      :key="task.id"
      class="task-card d-flex justify-content-between mb-2"
    >
      <div>
        <router-link :to="`/task/${task.id}`" class="fw-bold">
          {{ task.title }}
        </router-link>
        <p class="mb-1">{{ task.description }}</p>
        <span :class="task.completed ? 'text-success' : 'text-warning'">
          {{ task.completed ? 'Завершено' : 'Активне' }}
        </span>
      </div>

      <div>
        <button class="btn btn-sm btn-success me-2" @click="toggle(task.id)">✓</button>
        <button class="btn btn-sm btn-danger" @click="remove(task.id)">✕</button>
      </div>
    </div>
  </transition-group>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'


const store = useTaskStore()

const toggle = (id) => store.toggleTask(id)
const remove = (id) => store.deleteTask(id)
</script>

<style>
.task-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  margin-bottom: 10px;
  transition: all 0.4s ease;
}

.task-enter-active,
.task-leave-active {
  transition: all 0.4s ease;
}

.task-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}

.task-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
}
</style>