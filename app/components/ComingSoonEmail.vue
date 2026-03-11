<template>
  <form @submit.prevent="subscribe" class="bg-white shadow rounded-xl p-8 flex flex-col gap-4">

     <strong>
            Saisissez votre email pour être informé du lancement
        </strong>

    <input
      v-model="email"
      type="email"
      placeholder="Votre email"
      required
      class="border rounded-lg px-4 py-2"
    />

    <button class="bg-blue-500 text-white rounded-full px-8 py-2" type="submit">
      Être prévenu
    </button>

    <p v-if="success" class="bg-green-200 px-8 py-2 rounded-full">
      Merci ! Vous serez prévenu du lancement 🚀
    </p>

  </form>
</template>

<script setup>

const email = ref("")
const success = ref(false)

const subscribe = async () => {

  await $fetch("/api/subscribe", {
    method: "POST",
    body: { email: email.value }
  })

  success.value = true
  email.value = ""

}

</script>