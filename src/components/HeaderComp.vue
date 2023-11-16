<script
    setup
    lang="ts"
>
import { store } from '@/store'
import { onMounted, onUnmounted, ref } from 'vue'
import { updateFormattedDate, formaterTime } from '@/utils/timeHandler'

const currentDay = ref('')
const currentTime = ref('')

onMounted(() => {
    [currentDay.value, currentTime.value] = updateFormattedDate()
    setInterval(() => {
        [currentDay.value, currentTime.value] = updateFormattedDate()
    }, 30000)
})
</script>

<template>
    <header>
    <div class="contentBlock">
            <div class="titleSection">секция а</div>
            <div class="headerTime">{{ `${currentDay}, ${currentTime}` }}</div>
    </div>
    </header>
</template>