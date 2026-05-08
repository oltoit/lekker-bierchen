<template>
    <div class="user" v-if="currentUser">
        <img :src="currentUser.profilePicture">
        <h2>{{ currentUser.name }}</h2>
        <p>{{ currentUser.biography }}</p>
        <div class="buttons">
            <button @click="swipeLeft">nope</button>
            <button @click="swipeRight">yehaw</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, computed, onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    interface User {
        name: string;
        password: string;
        biography: string;
        profilePicture: string;
    }

    export default defineComponent({
        name: 'LoginPage',

        setup() {
            const router = useRouter();
            const users = ref<User[]>([]);
            const currentIndex = ref(0);
            const currentUser = computed(() => users.value[currentIndex.value] ?? null);

            onMounted(async () => {
                const res = await fetch('/users.json');
                users.value = await res.json();
            });

            function swipeLeft() {
                currentIndex.value = (currentIndex.value + 1) % users.value.length;
            }

            function swipeRight() {
                if (!currentUser.value) return;
                router.push({ path: '/login-chat', query: { user: JSON.stringify(currentUser.value) } });
            }

            return { currentUser, swipeLeft, swipeRight };
        },
    });
</script>

<style scoped>

</style>
