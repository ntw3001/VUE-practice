<template>
    <div class="user_profile">
      <h3>User Profile</h3>
      <ul>
        <li>
          <span>First Name:</span> {{ name }}
        </li>
        <li>
          <span>Last Name:</span> {{ lastName }}
        </li>
        <li>
          <span>AKA:</span> {{ aka }}
        </li>
      </ul>
    </div>
</template>

<script setup>
  const props = defineProps(["name", "aka", "lastName"])
</script>

<style scoped>
  span {
    font-weight: 700
  }

  .user-profile {
    border: 1px solid #2196f3;
    padding: 10px;
  }
</style>
