<template>
    <p>{{ message }}</p>
</template>

<script setup>
    defineProps({
        message: String,
        user: Boolean
    })
</script>