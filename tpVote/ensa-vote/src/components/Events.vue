<template>
  <div>
    <h2>Liste des événements</h2>
    <div v-for="evt in events" :key="evt.id">
      <EventCard :evt="evt" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import EventCard from "./EventCard.vue";

export default {
  name: "EventsList",
  components: { EventCard },
  setup() {
    const events = ref([]);

    onMounted(() => {
      onSnapshot(collection(db, "Events"), (snapshot) => {
        events.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    });

    return { events };
  }
};
</script>
