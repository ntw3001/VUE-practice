<template>
    <div class="user-profile">
      <h3>User Profile</h3>
      <ul>
        <li>
          <span>First Name:</span> {{ userName }}
        </li>
        <li>
          <span>Last Name:</span> {{ userLastName }}
        </li>
        <li>
          <span>AKA:</span> {{ userAka }}
        </li>
        <li>
          <span>Age:</span> {{ userAge }}
        </li>
        <li>
          <span>Favourites:</span>
          <ul>
            <li>
              <span>Colour:</span> {{ userFavourites.colour }}
            </li>
            <li>
              <span>Toy:</span> {{ userFavourites.toy }}
            </li>
          </ul>
        </li>
      </ul>
      <h4>Parents</h4>
      <ul>
        <li v-for="(value, key, index) in userParents" :key="index">
          <span>{{ capitalizeFirstLetter(key) }}:</span> {{ value }}
        </li>
      </ul>
    </div>
</template>

<script setup>
  const props = defineProps({
    userName: String,
    userAka: String,
    userLastName: String,
    userAge: Number,
    userFavourites: Object,
    userParents: Object
  });


  const capitalizeFirstLetter = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

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
