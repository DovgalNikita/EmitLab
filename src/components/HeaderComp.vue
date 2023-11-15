<script
    setup
    lang="ts"
>
import { key } from '@/store'
import { onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'
import { updateFormattedDate } from '@/utils/timeHandler'

const store = useStore(key)

const dayRef = ref(store.state.day)
const timeRef = ref(store.state.time)

onMounted(() => {
    const [day, time] = updateFormattedDate()
    setInterval(() => {
        const [day, time] = updateFormattedDate()
        store.state.day = day
        store.state.time = time
    }, 30000)
})

onUnmounted(() => {
    clearInterval(updateFormattedDate)
})
</script>

<template>
    <header>
       <div class="contentBlock">
            <div class="titleSection">секция а</div>
            <div class="headerTime">{{ `${dayRef}, ${timeRef}` }}</div>
       </div>
    </header>
</template>