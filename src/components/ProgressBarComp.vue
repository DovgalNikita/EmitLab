<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    isReport: {
        type: Boolean,
        required: true
    }
})

</script>

<template>
    <div class="progressBarBlock">
        <progress value="70" max="100"></progress>
    </div>
</template>