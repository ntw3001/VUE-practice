<template>
    <div class="row row-cols-1 row-cols-md-2 g-4">

    <!-- ITEM -->
    <div class="col" v-for = "(note) in notes">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text">{{  note.description }}</p>
        </div>
        <div class="card-footer">
            <router-link :to="`/admin/update_article/${note.id}`">
              Update Note
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { DB } from '../firebase/configs.js'
  import { collection, getDocs } from 'firebase/firestore'
  import { ref } from 'vue'

  const notes = ref([]);

  const notesCollection = collection(DB, 'notes');

  getDocs(notesCollection)
  .then((snapshot) => {
    let documents = [];
    snapshot.docs.forEach(doc => {
      documents.push({...doc.data(),id:doc.id});
    });
    notes.value = documents;
  });

</script>
