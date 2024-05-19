<template>
  <div class="card shadow-lg p-8 max-w-lg mx-auto my-8">
    <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="field">
        <label for="name" class="block mb-1">Name</label>
        <InputText v-model="form.name" id="name" class="w-full p-2 border rounded" required />
      </div>
      <div class="field">
        <label for="email" class="block mb-1">Email</label>
        <InputText v-model="form.email" id="email" type="email" class="w-full p-2 border rounded" required />
      </div>
      <div class="field">
        <label for="message" class="block mb-1">Message</label>
        <Textarea v-model="form.message" id="message" rows="5" class="w-full p-2 border rounded" required />
      </div>
      <div class="field">
        <Button label="Submit" type="submit" class="w-full p-2 bg-primary text-white rounded hover:bg-green-600" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

export default {
  components: {
    InputText,
    Textarea,
    Button
  },
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: ''
    });

    const submitForm = () => {
      console.log('Form submitted:', form.value);
      // Handle form submission (e.g., send to server)
    };

    return {
      form,
      submitForm
    };
  }
};
</script>

<style scoped>
/* Apply UnoCSS utility classes */
.card {
  background-color: white;
  border-radius: 0.5rem;
}
.field {
  display: flex;
  flex-direction: column;
}
</style>

