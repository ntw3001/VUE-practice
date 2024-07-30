<template>
  <div>
    <app-header/>
    <div class="container">
      <UserProfile
        :userName="data.name"
        :userLastName="data.lastName"
        :userAka="data.aka"
        :userAge="data.age"
        :userParents="data.parents"
        :userFavourites="data.favourites"
        @update-lastname="data.lastName = $event"
        @say-hello="alertHello"
        :update-age="updateAge"
      />
      <hr/>
      <button @click="updateName">Change name to {{data.secretName}}</button>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
  import Footer from "@/components/header_footer/footer.vue"
  import UserProfile from "@/components/user/profile.vue"
  import {reactive} from "vue"

  const data = reactive({
    name: "Progle",
    lastName: "Doe",
    aka: "Framcos",
    secretName: "John",
    age: "Twenty-five",
    favourites: {
      colour: "blue",
      toy: "train"
    },
    parents: {
      father: "Sebastian French",
      mother: "Margaret [NO NAME GIVEN]"
    }
  });

  const updateName = () => {

    if (data.name ==="Progle") {
      data.name = "John";
      data.secretName = "Progle"
    } else {
      data.name = "Progle";
      data.secretName = "John"}
  };

  const updateAge = (value) => {
    data.age = value
  };

  const alertHello = () => {
    alert("vueApp.vue says you're doing great!");
  };
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
  .container {
    box-sizing: border-box;
    padding: 20px;
    min-height: 79vh;
  }
  div {
    color:rgb(34, 34, 134);
  }
</style>
