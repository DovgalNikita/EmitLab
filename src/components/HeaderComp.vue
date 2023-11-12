<script
    setup
    lang="ts"
>
import { ref, onMounted, onUnmounted } from 'vue'

const formattedDate = ref<string>('')

const updateFormattedDate = () => {
    const date = new Date()
    const options = {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit'
    }
    formattedDate.value = date.toLocaleString('ru-RU', options)
}

onMounted(() => {
    updateFormattedDate()
    setInterval(updateFormattedDate, 30000)
})

onUnmounted(() => {
    clearInterval(updateFormattedDate)
})

</script>

<template>
    <header>
       <div class="contentBlock">
            <div class="titleSection">секция а</div>
            <div class="headerTime">{{ formattedDate }}</div>
       </div>
    </header>
</template>