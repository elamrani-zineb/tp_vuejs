<template>
  <li>
    <div>
      <h3 :class="{ done: task.completed }">
        {{ task.title }}
      </h3>
      <p>{{ task.description }}</p>
    </div>

    <div>
      <button @click="$emit('toggle-task', task)">✔</button>
      <button @click="$emit('delete-task', task.id)">❌</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
