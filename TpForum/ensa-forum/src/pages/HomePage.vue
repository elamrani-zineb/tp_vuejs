<template>
  <div>
    <Navbar />
    <b-container class="mt-4">
      <h2>Discussions Récentes</h2>
      <b-row>
        <b-col v-for="discussion in discussions" :key="discussion.id" cols="4">
          <DiscussionCard :discussion="discussion" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import DiscussionCard from '../components/DiscussionCard.vue';
import { getDiscussions } from '../services/discussions';

export default {
  components: { Navbar, DiscussionCard },
  data() {
    return { discussions: [] };
  },
  async mounted() {
    this.discussions = await getDiscussions();
  }
};
</script>
