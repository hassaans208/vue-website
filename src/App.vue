<script>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  components: {
    RouterView,
    HeaderComponent
  }
}
</script>

<template>
  <div class="w-full p-0 m-0 flex flex-col gap-6">
    <HeaderComponent />
    <RouterView />
  </div>
</template>
