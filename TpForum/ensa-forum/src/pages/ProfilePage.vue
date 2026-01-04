<template>
  <div>
    <Navbar />
    <b-container class="mt-4">
      <h2>Mon Profil</h2>
      <UserProfileForm v-if="userData" :userData="userData" />
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import UserProfileForm from '../components/UserProfileForm.vue';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default {
  components: { Navbar, UserProfileForm },
  data() {
    return { userData: null };
  },
  async mounted() {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    this.userData = { id: auth.currentUser.uid, ...docSnap.data() };
  }
};
</script>
