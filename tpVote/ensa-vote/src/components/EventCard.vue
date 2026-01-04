<template>
  <div class="event-card">
    <h3>{{ evt.title }}</h3>
    <p>{{ evt.description }}</p>
    <p>Date: {{ new Date(evt.date).toLocaleString() }}</p>
    <div>
      <button @click="vote('yes')">👍 Yes ({{ evt.yesVotes }})</button>
      <button @click="vote('no')">👎 No ({{ evt.noVotes }})</button>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import { collection, addDoc, updateDoc, doc, increment, query, where, getDocs, serverTimestamp } from "firebase/firestore";

export default {
  props: ["evt"],
  methods: {
    async hasVoted() {
      const q = query(
        collection(db, "Votes"),
        where("eventId", "==", this.evt.id),
        where("userId", "==", auth.currentUser.uid)
      );
      const snapshot = await getDocs(q);
      return !snapshot.empty;
    },
    async vote(choice) {
      if (!auth.currentUser) return;
      if (await this.hasVoted()) {
        alert("Vous avez déjà voté !");
        return;
      }

      // enregistrer le vote
      await addDoc(collection(db, "Votes"), {
        eventId: this.evt.id,
        userId: auth.currentUser.uid,
        vote: choice,
        createdAt: serverTimestamp()
      });

      // mettre à jour compteur
      const eventRef = doc(db, "Events", this.evt.id);
      await updateDoc(eventRef, {
        [choice === "yes" ? "yesVotes" : "noVotes"]: increment(1),
        updatedAt: serverTimestamp()
      });
    }
  }
};
</script>
