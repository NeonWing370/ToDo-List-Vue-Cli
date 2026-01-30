<template>
  <div class="btn-group mb-3">
    <button class="btn btn-outline-primary" @click="set('all')">Всі</button>
    <button class="btn btn-outline-primary" @click="set('active')">Активні</button>
    <button class="btn btn-outline-primary" @click="set('completed')">Завершені</button>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
const set = (value) => store.setFilter(value)
</script> 