<script
    setup
    lang="ts"
>
import { onMounted, onUnmounted, ref } from 'vue'
import { updateFormattedDate } from '@/utils/timeHandler'

updateFormattedDate()

const currentDay = ref<string>('')
const currentTime = ref<string>('')

onMounted(() => {
    [currentDay.value, currentTime.value] = updateFormattedDate()
    setInterval(() => {
        [currentDay.value, currentTime.value] = updateFormattedDate()
    }, 1000)
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