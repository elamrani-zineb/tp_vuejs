<template>
  <b-card class="mb-2">
    <p>{{ response.content }}</p>
    <small>Auteur: {{ response.authorId }} | Date: {{ response.createdAt.toDate().toLocaleString() }}</small>
  </b-card>
</template>

<script>
export default {
  name: "ResponseCard",
  props: {
    response: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
b-card {
  padding: 10px;
}
</style>
