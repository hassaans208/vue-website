<script>
import TrashIcon from "../assets/icons/TrashIcon.vue";
import EditIcon from "../assets/icons/EditIcon.vue";
import { useTodoStore } from "./../stores/todos";

export default {
  components: {
    TrashIcon,
    EditIcon,
  },
  props: {
    data: Object,
    toggleEdit: Function,
    arrayKey: Number,
  },
  data() {
    let store = useTodoStore();
    return {
      store,
    };
  },
  methods: {
    deleteData() {
      this.store.delete(this.data.id);
    },
    updateData() {
      this.store.updateData({ ...this.data, arrayKey: this.arrayKey });
      this.toggleEdit(true);
    },
  },
};
</script>

<template>
  <div
    class="flex-shrink w-[17.5rem] flex-grow h-auto transition delay-100 hover:scale-105 cursor-pointer shadow-sm shadow-black/75 rounded-lg bg-gray-100 px-2 border p-0 border-gray-400"
  >
    <div class="py-3 px-4 flex w-full flex-col gap-4">
      <div class="flex items-center justify-between">
        <p class="font-bold text-xl">{{ data.title }}</p>
        <div class="flex items-center gap-2">
          <EditIcon titile="Edit Note" @click="updateData" />
          <TrashIcon titile="Delete Note" @click="deleteData" />
        </div>
      </div>
      <p class="hyphens-manual line-clamp-0 break-all">{{ data.description }}</p>
      <p class="place-self-end text-xs text-gray-500 font-bold">
        Noted on: {{ data.createdAt.substr(0, 15) }}
      </p>
    </div>
  </div>
</template>
