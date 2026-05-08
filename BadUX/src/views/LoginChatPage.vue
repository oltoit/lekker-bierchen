<script>
    import jsonData from '../users.json';
    import { defineComponent } from 'vue';
import ChatMessage from './chat-components/ChatMessage.vue';

    export default defineComponent({
        name: 'LoginChatPage',
        components: {
            ChatMessage
        },
        data() {
            return {
                users: jsonData
            }
        }
    });
</script>

<template>
    <div>
        <p>{{ users[0].name }}</p>
        <img :src="users[0].profilePicture" :alt="users[0].name">
        <ChatMessage :message="'Ich werde alles zerstören'" :user="true"/>
    </div>
</template>