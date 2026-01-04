<template>
  <nav class="navbar">
    <h1>ENSA Vote</h1>
    <div v-if="user">
      <span>{{ user.email }}</span>
      <button @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
import { auth } from "../firebase";
import { useUserStore } from "../stores/user";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { onMounted, ref } from "vue";

export default {
  name: "AppNavbar",
  setup() {
    const userStore = useUserStore();
    const user = ref(userStore.user);

    onMounted(() => {
      onAuthStateChanged(auth, (u) => {
        user.value = u;
        userStore.setUser(u);
      });
    });

    const logout = async () => {
      await signOut(auth);
      userStore.setUser(null);
    };

    return { user, logout };
  }
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #4caf50;
  color: white;
}
button {
  background-color: white;
  color: #4caf50;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover {
  background-color: #e7e7e7;
}
</style>
