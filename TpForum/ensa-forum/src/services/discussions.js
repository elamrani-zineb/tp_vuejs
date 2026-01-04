import { db } from "../firebase";
import { collection, addDoc, getDocs, query, where, orderBy } from "firebase/firestore";

// Créer une discussion
export const createDiscussion = (title, content, category, authorId) =>
  addDoc(collection(db, "discussions"), { title, content, category, authorId, createdAt: new Date() });

// Récupérer toutes les discussions
export const getDiscussions = async () => {
  const q = query(collection(db, "discussions"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
