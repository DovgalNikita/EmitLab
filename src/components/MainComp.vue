<script setup lang="ts">
import { ref, watch } from 'vue'
import { updateFetchindData } from '@/services/FetchData'
import { store } from '@/store/index'

setInterval(() => {
    updateFetchindData()
}, 300000)

const stateVuex = ref(store.state)
const dataContentBlocks = ref(stateVuex.value.fetchindData || [])
const dataContentBlocksHandled = ref(dataContentBlocks.value !== undefined ? JSON.parse(JSON.stringify(dataContentBlocks.value)) : null) // data pf speakers to JSON

console.log(dataContentBlocksHandled.value)
// watch(currentTime, () => { // tracker for activate current Event
//     if (startEvent <= currentTime.value && currentTime.value < endEvent) {
//         isAciveReport.value = true
//     } else {
//         isAciveReport.value = false
//     }
// })

const pointerData = ref(stateVuex.value.pointerData)
pointerData.value = 14

</script>

<template>
    <main class="mainComp">
        <ReportBlock v-for="block in dataContentBlocks.slice(pointerData,pointerData+4)" :key="block.id" :data="block"/>
    </main>
</template>

<style>
@font-face {
    font-family: 'Inter-Bold';
    src: local('Inter-Bold'), url('../assets/fonts/Inter-Bold.woff2') format('woff2');
}
@font-face {
    font-family: 'Inter-Medium';
    src: local('Inter-Medium'), url('../assets/fonts/Inter-Medium.woff2') format('woff2');
}
@font-face {
    font-family: 'Inter-Regular';
    src: local('Inter-Regular'), url('../assets/fonts/Inter-Regular.woff2') format('woff2');
}
</style>