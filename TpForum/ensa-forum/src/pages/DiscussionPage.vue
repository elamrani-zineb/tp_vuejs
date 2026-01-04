<template>
  <div>
    <Navbar />
    <b-container class="mt-4">
      <h2>{{ discussion.title }}</h2>
      <p>{{ discussion.content }}</p>

      <h4>Réponses</h4>
      <ResponseCard v-for="resp in responses" :key="resp.id" :response="resp" />

      <b-form @submit.prevent="postResponse">
        <b-form-textarea v-model="newResponse" placeholder="Votre réponse..." rows="3"></b-form-textarea>
        <b-button type="submit" variant="primary" class="mt-2">Répondre</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import ResponseCard from '../components/ResponseCard.vue';
import { db, auth } from '../firebase';
import { collection, addDoc, query, where, getDocs, orderBy } from 'firebase/firestore';

export default {
  components: { Navbar, ResponseCard },
  data() {
    return { discussion: {}, responses: [], newResponse: '' };
  },
  async mounted() {
    const discussionId = this.$route.params.id;
    const docRef = collection(db, "discussions");
    const docSnapshot = await getDocs(query(docRef, where("__name__", "==", discussionId)));
    this.discussion = docSnapshot.docs[0].data();

    // Récupérer les réponses
    const respQuery = query(collection(db, "responses"), where("discussionId", "==", discussionId), orderBy("createdAt", "asc"));
    const respSnapshot = await getDocs(respQuery);
    this.responses = respSnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
  },
  methods: {
    async postResponse() {
      if (!this.newResponse) return;
      await addDoc(collection(db, "responses"), {
        content: this.newResponse,
        authorId: auth.currentUser.uid,
        discussionId: this.$route.params.id,
        createdAt: new Date()
      });
      this.newResponse = '';
      location.reload();
    }
  }
};
</script>
