<template>
  <div class="form">
    <input v-model="title" placeholder="Titre de la tâche" />
    <input v-model="description" placeholder="Description" />
    <button @click="submitTask">Ajouter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: ""
    }
  },
  methods: {
    submitTask() {
      if (this.title.trim() !== "") {
        this.$emit("add-task", {
          title: this.title,
          description: this.description
        })
        this.title = ""
        this.description = ""
      }
    }
  }
}
</script>
