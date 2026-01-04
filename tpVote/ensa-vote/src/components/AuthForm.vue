<template>
  <div>
    <h2>{{ isLogin ? "Login" : "Register" }}</h2>
    <form @submit.prevent="submit">
      <input v-model="email" type="email" placeholder="Email ENSA" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">{{ isLogin ? "Login" : "Register" }}</button>
    </form>
    <p @click="toggle">{{ isLogin ? "Créer un compte ?" : "Déjà inscrit ?" }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const isLogin = ref(true);

    const toggle = () => (isLogin.value = !isLogin.value);

    const submit = async () => {
      try {
        if (!email.value.endsWith("@uca.ac.ma")) {
          alert("Utilisez votre email ENSA !");
          return;
        }
        if (isLogin.value) {
          await signInWithEmailAndPassword(auth, email.value, password.value);
        } else {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
        }
        router.push("/events");
      } catch (err) {
        alert(err.message);
      }
    };

    return { email, password, isLogin, toggle, submit };
  }
};
</script>
