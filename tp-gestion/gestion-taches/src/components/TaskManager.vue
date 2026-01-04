<template>
  <div class="container">
    <h1>Gestion des tâches</h1>

    <TaskForm @add-task="addTask" />

    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-task="toggleTask"
        @delete-task="deleteTask"
      />
    </ul>
  </div>
</template>

<script>
import TaskForm from "./TaskForm.vue"
import TaskItem from "./TaskItem.vue"
import { getTasks } from "../services/taskService"

export default {
  components: { TaskForm, TaskItem },
  data() {
    return {
      tasks: []
    }
  },
  async mounted() {
    this.tasks = await getTasks()
  },
  methods: {
    addTask(data) {
      this.tasks.push({
        id: Date.now(),
        title: data.title,
        description: data.description,
        completed: false
      })
    },
    toggleTask(task) {
      task.completed = !task.completed
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  }
}
</script>
