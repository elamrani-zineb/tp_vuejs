<template>
  <div>
    <Navbar />
    <b-container class="mt-4" style="max-width: 500px;">
      <h2>Connexion</h2>
      <b-form @submit.prevent="handleLogin">
        <b-form-group label="Email">
          <b-form-input v-model="email" type="email" required></b-form-input>
        </b-form-group>
        <b-form-group label="Mot de passe">
          <b-form-input v-model="password" type="password" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Se connecter</b-button>
        <b-button variant="link" @click="resetPassword">Mot de passe oublié ?</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { login, resetPassword } from '../services/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { Navbar },
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const handleLogin = async () => {
      try {
        await login(email.value, password.value);
        router.push('/');
      } catch (err) {
        alert(err.message);
      }
    };

    const resetPasswordHandler = async () => {
      if (!email.value) return alert("Veuillez entrer votre email.");
      try {
        await resetPassword(email.value);
        alert("Email de réinitialisation envoyé !");
      } catch (err) {
        alert(err.message);
      }
    };

    return { email, password, handleLogin, resetPassword: resetPasswordHandler };
  }
};
</script>
