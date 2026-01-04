<template>
  <b-form @submit.prevent="updateProfile">
    <b-form-group label="Nom">
      <b-form-input v-model="userData.name" required></b-form-input>
    </b-form-group>
    <b-form-group label="Email">
      <b-form-input v-model="userData.email" type="email" required disabled></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Mettre à jour</b-button>
  </b-form>
</template>

<script>
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default {
  props: ['userData'],
  methods: {
    async updateProfile() {
      const userRef = doc(db, "users", this.userData.id);
      await updateDoc(userRef, { name: this.userData.name });
      alert("Profil mis à jour !");
    }
  }
};
</script>
