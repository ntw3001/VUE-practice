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
      <hr/>
      <button @click="updateLastName">Redact last name</button>
      <button @click="updateAge(100)">Become 100 years old</button>
    </div>
    <hr/>
    What does vueApp.vue think of my progress?
    <button @click="sayHello">FIND OUT</button>
</template>

<script setup>

const emit = defineEmits(['update-lastname', 'say-hello']);

  const props = defineProps({
    userName: String,
    userAka: {
      type: String,
      required: true,
      default: "None"
    },
    userLastName: {
      type: String,
      validator(value) {
        if (value === "Doe" || "[REDACTED]") {
          return true
        } else {
          return false
        }

      }
    },
    userAge: [Number, String],
    userFavourites: Object,
    userParents: Object,
    updateAge: Function
  });

  const updateLastName = () => {
    emit("update-lastname", "[REDACTED]");
  }

  const capitalizeFirstLetter = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  const sayHello = () => {
    emit("say-hello");
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
