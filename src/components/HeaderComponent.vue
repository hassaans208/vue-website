<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <header class="flex flex-row justify-between bg-black w-full px-6 py-2 m-0">
    <RouterLink to="/">
      <div class="flex cursor-pointer text-white font-bold text-xl">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
        <p>ue Website</p>
      </div>
    </RouterLink>
    <div class="flex gap-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </header>
</template>
