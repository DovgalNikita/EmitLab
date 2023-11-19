<script setup lang="ts">
import { defineProps, ref, computed, watch } from 'vue'
import { store } from '@/store'
import { progressBarHandler } from '@/utils/progressBarHandler'

const props = defineProps({
    isReport: {
        type: Boolean,
        required: true
    }
})

</script>

<template>
    <div class="progressBarBlock">
        <progress :value="90" max="100"></progress>
    </div>
</template>