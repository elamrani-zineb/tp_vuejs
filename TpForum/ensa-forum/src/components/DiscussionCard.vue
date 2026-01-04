<template>
  <b-card :title="discussion.title" class="mb-3">
    <p>{{ discussion.content }}</p>
    <small>Catégorie: {{ discussion.category }} | Auteur: {{ discussion.authorId }}</small>
    <b-button variant="link" :to="`/discussion/${discussion.id}`">Voir discussion</b-button>
  </b-card>
</template>

<script>
export default {
  props: ['discussion']
};
</script>
