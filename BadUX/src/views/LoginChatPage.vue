<script setup>
    import { defineComponent } from 'vue';
    import ChatMessage from './chat-components/ChatMessage.vue';
    import { useRoute } from "vue-router";

    const route = useRoute();
    const user = JSON.parse(route.query.user);
</script>

<template>
    <div>
        <p>{{ user.name }}</p>
        <img :src="user.profilePicture" :alt="user.name">
        <ChatMessage :message="'Ich werde alles zerstören'" :user="true"/>
    </div>
</template>