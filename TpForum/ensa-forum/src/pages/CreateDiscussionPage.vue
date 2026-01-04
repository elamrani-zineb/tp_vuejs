<template>
  <div>
    <Navbar />
    <b-container class="mt-4" style="max-width: 600px;">
      <h2>Créer une discussion</h2>
      <b-form @submit.prevent="createDiscussionHandler">
        <b-form-group label="Titre">
          <b-form-input v-model="title" required></b-form-input>
        </b-form-group>
        <b-form-group label="Contenu">
          <b-form-textarea v-model="content" rows="5" required></b-form-textarea>
        </b-form-group>
        <b-form-group label="Catégorie">
          <b-form-select v-model="category" :options="categories" required></b-form-select>
        </b-form-group>
        <b-button type="submit" variant="primary">Créer</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { createDiscussion } from '../services/discussions';
import { auth } from '../firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { Navbar },
  setup() {
    const title = ref('');
    const content = ref('');
    const category = ref('Général');
    const categories = ref(['Général', 'Tech', 'Gaming', 'Éducation', 'Autres']);
    const router = useRouter();

    const createDiscussionHandler = async () => {
      if (!title.value || !content.value) return;
      await createDiscussion(title.value, content.value, category.value, auth.currentUser.uid);
      router.push('/');
    };

    return { title, content, category, categories, createDiscussionHandler };
  }
};
</script>
