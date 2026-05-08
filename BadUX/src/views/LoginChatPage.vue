<script setup lang="ts">
    import ChatMessage from './chat-components/ChatMessage.vue';
    import TextField from './chat-components/TextField.vue';
    import { useRoute } from "vue-router";
    import { ref } from 'vue';

    const route = useRoute();
    const user = JSON.parse(String(route.query.user));

    const messages = ref<{ message: string; user: boolean }[]>([]);
    function onSend(message: { message: string; user: boolean }) {
        messages.value.push(message);

        const pwd = message.message;
        if (pwd === user.password) {
            addResponse("Omg ja ich will");
        } else {
            addResponse("Boah ne hab leider gar kein Interesse")
        }
    }

    function addResponse(msg: string) {
        messages.value.push({ message: msg, user: false });
    }
</script>

<template>
    <div>
        <p>{{ user.name }}</p>
        <img :src="user.profilePicture" :alt="user.name">

        <!--Message Container-->
        <div class="MessageContainer">
            <ChatMessage v-for="(message, index) in messages" :key="index" :message="message.message" :user="message.user"/>
        </div>
        

        <div class="fick-mich-in-den-arsch">
            <TextField class="unten" @send="onSend"/>
            <div class="placeholder"></div>
        </div>
    </div>
</template>

<style>
    .unten {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .placeholder {
        height: 50px;
    }

    .fick-mich-in-den-arsch {
        display: flex;
        flex-direction: column;
        
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .MessageContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        margin-bottom: 60px;
    }
</style>