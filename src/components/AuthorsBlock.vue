<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'

const props = defineProps({
    speakersData: {
        type: Object
    },
    isAciveReport: {
        type: Boolean
    }
})

const data = ref(props.speakersData || []) // data of speakers
const isAciveReport = computed(() => props.isAciveReport)
const pointer = ref(0)
const dataHandled = ref(data.value !== undefined ? JSON.parse(JSON.stringify(data.value)) : null) // data pf speakers to JSON
const isSwiped = ref(true)

if (dataHandled.value.length > 2) { // tracker authors
    setInterval(() => {
        isSwiped.value = true
        pointer.value = pointer.value + 2
        if (pointer.value > dataHandled.value.length) {
            pointer.value = 0
        }
    }, 10000)
}
</script>

<template>
    <div class="observerContent">
        <div class="authorsRow" v-if="isSwiped">
            <div class="authorBlock" v-for="speaker in dataHandled.slice(pointer,pointer+2)" :key="speaker">
                <div class="imgAuthor">
                    <img :src="speaker.photo" alt="">
                </div>
                <div class="authorData" :class="{active:isAciveReport}">
                    <div class="FIO">
                        <div class="name">{{ speaker.name }}</div>
                        <div class="surname">{{ speaker.surname }}</div>
                    </div>
                    <div class="position">{{ speaker.position }}</div>
                </div>
            </div>
        </div>
    </div>
</template>