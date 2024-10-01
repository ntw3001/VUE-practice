<template>
    <div class="container">
      <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-4">FBase</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" v-if="!isAuth">
            <router-link to="/users/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item" v-if="isAuth">
            <p
            role="button"
            class="nav-link"
            @click="handleSignOut"
            >Logout</p>
          </li>
          <li class="nav-item" v-if="isAuth">
            <router-link to="/admin/add_article" class="nav-link">Add</router-link>
          </li>
        </ul>
      </header>
    </div>
  </template>

<script setup>

  import { AUTH } from '@/firebase/configs';
  import router from '@/router';
  import { signOut, onAuthStateChanged } from 'firebase/auth';
  import { ref } from 'vue';7

  const isAuth = ref(AUTH.currentUser);

  const user = ref(null);

  onAuthStateChanged(AUTH, (user) => {
    console.log('User state changed. Current user is:', user);
    isAuth.value = user;
  });

  const handleSignOut = async () => {
    try {
        await signOut(AUTH);
        user.value = null;
        router.push('/');
    } catch (error) {
        console.error('Error during sign out:', error);
    }
};

</script>

<style>

  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }

</style>
