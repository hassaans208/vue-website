<script>
import ListItems from "../components/ListItems.vue";
import CreateNew from "../components/CreateNew.vue";
import { useTodoStore } from "./../stores/todos";

export default {
  components: {
    ListItems,
    CreateNew,
  },
  data() {
    let store = useTodoStore();

    return {
      createNewItem: false,
      editData: false,
      store,
      response: store.todoList,
    };
  },
  methods: {
    toggle(val) {
      this.createNewItem = val;
    },
    resetResponse() {
      console.log(useTodoStore().todoList);
      this.response = useTodoStore().todoList;
    },
    toggleEdit(val) {
      this.editData = val;
    },
  },
};
</script>

<template class="w-full">
  <main class="mx-10 my-4">
    <CreateNew
      :create-new="createNewItem"
      :toggle="toggle"
      :toggle-edit="toggleEdit"
      :reset-response="resetResponse"
      :edit-new="editData"
    />
    <ListItems :toggleEdit="toggleEdit" :response="response" />
  </main>
</template>
