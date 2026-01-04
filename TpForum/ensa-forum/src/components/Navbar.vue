<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="/">ForumCommunity</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="!user" to="/login">Connexion</b-nav-item>
        <b-nav-item v-if="!user" to="/signup">Inscription</b-nav-item>
        <b-nav-item v-if="user" to="/profile">Profil</b-nav-item>
        <b-nav-item v-if="user" @click="logoutUser">Déconnexion</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { ref, onMounted } from 'vue';
import { auth, logout } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const user = ref(null);
    const router = useRouter();

    onMounted(() => {
      onAuthStateChanged(auth, (u) => {
        user.value = u;
      });
    });

    const logoutUser = async () => {
      await logout();
      router.push('/login');
    };

    return { user, logoutUser };
  }
};
</script>
