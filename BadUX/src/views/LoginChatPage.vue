<script>
    import jsonData from '../users.json';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'LoginChatPage',
        data() {
            return {
                users: jsonData
            }
        }
    });
</script>

<template>
    <p>{{ users[0].name }}</p>
</template>