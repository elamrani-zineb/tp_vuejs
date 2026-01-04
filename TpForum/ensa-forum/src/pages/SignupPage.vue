<template>
  <div>
    <Navbar />
    <b-container class="mt-4" style="max-width: 500px;">
      <h2>Inscription</h2>
      <b-form @submit.prevent="handleSignup">
        <b-form-group label="Nom">
          <b-form-input v-model="name" required></b-form-input>
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input v-model="email" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group label="Mot de passe">
          <b-form-input v-model="password" type="password" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">S'inscrire</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { signup } from '../services/auth';
import { db } from '../firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { doc, setDoc } from 'firebase/firestore';

export default {
  components: { Navbar },
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const handleSignup = async () => {
      try {
        const userCredential = await signup(email.value, password.value);
        // Ajouter utilisateur dans Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name: name.value,
          email: email.value,
          role: "user"
        });
        router.push('/');
      } catch (err) {
        alert(err.message);
      }
    };

    return { name, email, password, handleSignup };
  }
};
</script>
