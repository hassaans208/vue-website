<script>
// import toaster from '../main
import { toaster } from "./../plugins/toaster";
import { useTodoStore } from "./../stores/todos";

export default {
  props: {
    createNew: Boolean,
    editNew: Boolean,
    toggle: Function,
    toggleEdit: Function,
    arrayKey: Number,
    resetResponse: Function,
  },
  data() {
    let store = useTodoStore();
    return {
      title: "",
      description: "",
      valid: false,
      store,
      color: "#4a5568",
      labelColor: "white",
      border: "black",
    };
  },

  methods: {
    setError(msg) {
      toaster.error(msg);
    },
    setFormEnable() {
      this.toggle(!this.createNew);
    },
    resetForm() {
      this.title = "";
      this.description = "";
    },
    checkColor() {
      if (this.title && (this.title.length > 14 || this.title.length < 3)) {
        this.color = "red";
        this.border = "red";
        return false;
      }
      if (
        this.description &&
        (this.description.length > 200 || this.description.length < 14)
      ) {
        this.color = "red";
        this.border = "red";
        return false;
      }
      this.color = "#4a5568";
      this.border = "#4a5568";
      return true;
    },
    validate() {
      if (this.title && (this.title.length > 14 || this.title.length < 3)) {
        this.setError("'Title' should be between 3 and 14 characters");
        return false;
      }
      if (
        this.description &&
        (this.description.length > 200 || this.description.length < 14)
      ) {
        this.setError("'Description' should be between 14 and 200 characters");
        return false;
      }
      return true;
    },
    submitForm() {
      if (this.editNew) {
        if (!this.validate()) return;
        console.log(this.editNew);
        const editData = this.store.editData;
        const data = { title: this.title, description: this.description };
        this.store.update(data, editData?.id, editData.arrayKey);
        this.store.updateData({});
        this.resetResponse();
        this.resetForm();
        this.toggleEdit(false);
        this.toggle(false);
        return;
      }
      if (!this.title || !this.description) {
        this.setError("Fill All Fields");
        return;
      } else {
        if (!this.validate()) return;
        this.store.add({ title: this.title, description: this.description });
        this.resetForm();
        this.toggle(false);
      }
    },
  },
  watch: {
    editNew() {
      console.log("edit");
      console.log("watcher", this.store.editData);
      if (this.editNew) {
        this.toggle(true);
        this.title = this.store.editData.title;
        this.description = this.store.editData.description;
        // console.log(wrapper);
        // this.wrapper.focus();
      } else {
        this.title = "";
        this.description = "";
      }
    },
  },
};
</script>

<template>
  <button
    @click="setFormEnable"
    :class="
      createNew
        ? 'bg-gradient-to-l from-orange-500 to-red-600 px-2 mb-2 place-self-end py-2 rounded-sm text-white text-xs'
        : 'bg-gradient-to-l from-indigo-500 to-sky-600  px-2 mb-6 place-self-end py-2 rounded-sm text-white text-xs'
    "
  >
    {{ createNew ? "Close" : "Create New" }}
  </button>
  <form v-if="createNew" @submit.prevent="submitForm">
    <div class="flex gap-3 mb-6">
      <div class="flex flex-col">
        <input
          type="text"
          class="px-3 py-2"
          placeholder="Title"
          v-model="title"
          :ref="wrapper"
          @focusout="validate"
          @keyup="checkColor"
          id="input"
        />
        <span id="length" class="text-xs place-self-end font-medium">{{
          this.title.length + " / 14"
        }}</span>
      </div>
      <div class="flex flex-col">
        <input
          type="text"
          id="input"
          class="px-3 py-2"
          placeholder="Details"
          v-model="description"
          @focusout="validate"
          @keyup="checkColor"
        />
        <span id="length" class="text-xs place-self-end font-medium">{{
          this.description.length + " / 200"
        }}</span>
      </div>
      <div>
        <input
          type="submit"
          class="bg-gradient-to-l from-indigo-500 to-sky-600 px-4 py-2 rounded-sm text-white"
        />
      </div>
    </div>
  </form>
</template>

<style>
#input {
  border: 1px solid v-bind("border");
  color: v-bind("color");
}
#length {
  color: v-bind("color");
}
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
#input:focus-visible {
  border: 1px solid v-bind("border");
  color: v-bind("color");
}
</style>
