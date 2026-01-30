<template>
  <div class="app-wrapper">
    <h1 class="text-center mb-4 app-title">
      ToDo-List
    </h1>
    <h4 class="text-center mb-4 app-subtitle">
      Впишіть сюди завдання яке вам треба виконати
    </h4>

    <router-view v-slot="{ Component }">
      <transition name="page" >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>