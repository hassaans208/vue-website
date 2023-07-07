import { defineStore } from 'pinia'
import { toaster } from '../plugins/toaster'

export const useTodoStore = defineStore('todo', {
    state: () => {
        return { todoList: [], editData: {}, count: 0 }
    },
    // could also be defined as
    actions: {
        add(entry) {
            let createdAt = Date().toString()

            const data = {
                id: this.count++,
                ...entry,
                createdAt
            }

            this.todoList.push(data)
            toaster.success('Created Successfully!')
        },
        delete(id) {
            var index = this.todoList.map(x => {
                return x.Id;
            }).indexOf(id);
            this.todoList.splice(index, 1);
            console.log(this.todoList);

            toaster.success('Deleted Successfully!')

        },
        updateData(data){
            this.editData = data;
        },
        update(entry, id, key) {

            let createdAt = Date().toString()

            const { title, description } = entry

            const data = {
                id,
                title,
                description,
                createdAt
            }

            this.todoList[key] = data

            console.log(this.todoList[key]);

            toaster.success('Updated Successfully!')
        }
    },
})