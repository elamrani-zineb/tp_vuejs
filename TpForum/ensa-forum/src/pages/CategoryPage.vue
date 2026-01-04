<template>
  <div>
    <Navbar />
    <b-container class="mt-4">
      <h2>Catégorie: {{ categoryName }}</h2>
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
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export default {
  components: { Navbar, DiscussionCard },
  data() {
    return { discussions: [], categoryName: this.$route.params.id };
  },
  async mounted() {
    const q = query(
      collection(db, "discussions"),
      where("category", "==", this.categoryName),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    this.discussions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};
</script>
