<script>
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListItem,
  },
  props: {
    toggleEdit: Function,
    response: Array,
  },
};
</script>

<template>
  <div class="flex flex-row gap-3 flex-wrap">
    {{ date }}
    <div v-for="(data, index) in response" :key="index">
      <ListItem :data="data" :arrayKey="index" :toggle-edit="toggleEdit" />
    </div>
    <div
      v-if="!response.length"
      class="w-full bg-white rounded-md border py-3 border-gray-300 text-center"
    >
      <p>Welcome to my portfolio app, Let's start playing around!</p>
    </div>
  </div>
</template>
