<template>
  <form @submit.prevent="subscribe" class="email-form">

    <p class="form-label">Soyez parmi les premiers informés du lancement</p>

    <div class="input-row">
      <input
        v-model="email"
        type="email"
        placeholder="votre@email.com"
        required
        class="email-input"
      />
      <button class="submit-btn" type="submit">
        <span>Être prévenu</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </div>

    <Transition name="fade">
      <p v-if="success" class="success-msg">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Merci ! Vous serez prévenu du lancement.
      </p>
    </Transition>

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

<style scoped>
.email-form {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    width: 100%;
    max-width: 480px;
}

.form-label {
    font-size: 0.8rem;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin: 0;
}

.input-row {
    display: flex;
    gap: 0.5rem;
    width: 100%;
}

.email-input {
    flex: 1;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(29, 120, 255, 0.25);
    border-radius: 10px;
    padding: 0.75rem 1rem;
    color: #e8eaf0;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}

.email-input::placeholder {
    color: #4a5568;
}

.email-input:focus {
    border-color: rgba(29, 120, 255, 0.6);
    box-shadow: 0 0 0 3px rgba(29, 120, 255, 0.12), 0 0 20px rgba(29, 120, 255, 0.1);
}

.submit-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #1d78ff;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
    box-shadow: 0 0 20px rgba(29, 120, 255, 0.3);
}

.submit-btn:hover {
    background: #3a8fff;
    box-shadow: 0 0 30px rgba(29, 120, 255, 0.55);
    transform: translateY(-1px);
}

.submit-btn:active {
    transform: translateY(0);
}

.success-msg {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: #4ade80;
    background: rgba(74, 222, 128, 0.08);
    border: 1px solid rgba(74, 222, 128, 0.2);
    border-radius: 8px;
    padding: 0.6rem 1rem;
    margin: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}
</style>