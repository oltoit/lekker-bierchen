<template>
    <div>
        <input v-model="inputText" type="text" @keyup.enter="sendMessage">
        <button @click="sendMessage">Send</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['send']);
    const inputText = ref('');

    function sendMessage() {
        if (inputText.value.trim() === '') return;
        emit('send', { message: inputText.value, user: true});
        inputText.value = '';
    }
</script>