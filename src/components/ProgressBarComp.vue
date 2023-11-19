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

const stateVuex = ref(store.state)
const currentTime = computed(() => stateVuex.value.currentTime)
const startEventTime = ref(stateVuex.value.startEventTime)
const durationEventTime = ref(stateVuex.value.durationEventTime)
const endEvent = ref(startEventTime.value + durationEventTime.value)
const progressValue = ref(0)

progressValue.value = progressBarHandler(startEventTime.value, endEvent.value, currentTime.value)
watch(currentTime, () => {
    progressValue.value = progressBarHandler(startEventTime.value, endEvent.value, currentTime.value)
})

</script>

<template>
    <div class="progressBarBlock">
        <progress :value="progressValue" max="100"></progress>
    </div>
</template>