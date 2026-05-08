<template>
    <p>{{ message }}</p>
</template>

<script setup lang="ts">
    defineProps({
        message: String,
        user: Boolean
    })
</script>