<template>
    
  <TaskForm />
  <TaskFilter />

  <transition-group name="fade" tag="div">
    <TaskList />
  </transition-group>
  
</template>

<script setup>
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import TaskFilter from '../components/TaskFilter.vue'
</script>

