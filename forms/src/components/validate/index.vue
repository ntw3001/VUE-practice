<template>
  <h3>No Homers Club</h3>
  <Form>
    <div class="mb-3">
      <label for="name">Name</label>
      <Field
        name='name'
        :rules="[isRequired, noHomers]"
        placeholder="Enter your name"
        class="form-control"
        />
      <ErrorMessage name="name" as="div" v-slot="{message}">
        <div class="alert alert-danger" role="alert">
          {{message}}
        </div>
      </ErrorMessage>
    </div>

    <button class="btn btn-primary" type="submit">
      Submit
    </button>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';

const isRequired=(value)=>{
  if(!value){
    return 'This field is required.'
  }
  return true;
}

const noHomers = (value) => {
  if (value === 'Homer') {
    return 'It says no Homers'
  }
    return true;
}

</script>
