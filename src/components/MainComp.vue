<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { updateFetchindData } from '@/services/FetchData'
import { store } from '@/store/index'
import { timeHandlerToMinute } from '@/utils/timeHandler'

setInterval(() => {
    updateFetchindData()
}, 300000)

const stateVuex = ref(store.state)
const dataContentBlocks = ref(stateVuex.value.fetchindData || [])
const dataContentBlocksHandled = computed(() => dataContentBlocks.value !== undefined ? JSON.parse(JSON.stringify(dataContentBlocks.value)) : null) // data pf speakers to JSON

const currentTime = computed(() => store.state.currentTime)
const counter = ref(0)
const pointerData = ref(stateVuex.value.pointerData)

function pointerReportBlockTracker () {
    counter.value = 0
    dataContentBlocksHandled.value.map((item) => {
        const startEvent = timeHandlerToMinute(item.startEventTime)
        const durationEvent = item.durationEvent
        console.log(item)
        if (startEvent <= currentTime.value && currentTime.value < (startEvent + durationEvent)) {
            store.commit('pointerDataMutation', { pointerData: counter.value })
        }
        counter.value++
        return ''
    })
    pointerData.value = stateVuex.value.pointerData
}

pointerReportBlockTracker()

watch([currentTime, pointerData], () => { // tracker for activate current Event
    pointerReportBlockTracker()
})

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