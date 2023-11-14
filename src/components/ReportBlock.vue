<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import { timeHandler, formatTime } from '../utils/timeHandler'
const bool = true

defineProps({
    data: {
        type: Object,
        default: () => ({
            id: 0,
            event: '',
            startEventTime: '',
            durationEvent: '',
            speakers: '',
            speakerPhotos: '',
            typeEvent: '',
            language: '',
            titleEvent: '',
            isReport: ''
        })
    }
})
</script>

<template>
    <div class="reportBlock" >
        <div class="relation">
            <div class="circle"></div>
            <div class="line"></div>
        </div>
        <div class="contentBlock" :class="[{active:bool}]">
            <ProgressBarComp/>
            <div class="content">

                <div class="timeRow">
                    <div class="timeRange">{{data.startEventTime+'-'+formatTime(timeHandler(data.startEventTime)+data.durationEvent)}}</div>
                    <div class="timeLeft"><div>осталось 16 мин</div></div>
                </div>

                <AuthorsBlock />

                <div class="themeTitle">
                    {{data.event}}
                </div>

                <div class="footerAnnotation">
                    <div>{{data.typeEvent}}</div>
                    <div>{{data.language}}</div>
                    <div>{{data.titleEvent}}</div>
                </div>
            </div>
        </div>
    </div>
</template>