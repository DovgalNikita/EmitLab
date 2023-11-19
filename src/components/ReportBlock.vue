<script setup lang="ts">
import IFetchData from '@/interfaces/IFetchData'
import { computed, ref, defineProps, watch } from 'vue'
import { RangeTimeFunc, timeHandlerToMinute, leftTimeEventHandler } from '../utils/timeHandler'
import { store } from '@/store'

const props = defineProps({
    data: {
        type: Object as () => IFetchData,
        default: (): IFetchData => ({
            id: null,
            event: '',
            startEventTime: '',
            durationEvent: 0,
            speakersData: [],
            typeEvent: '',
            language: '',
            titleEvent: '',
            isReport: false,
            isActive: false
        })
    }
})

const stateVuex = store.state // state
const dataObject = ref(props.data) // data from props []

const currentTime = computed(() => stateVuex.currentTime)
const isAciveReport = ref(props.data.isActive) // active report

const startEvent = timeHandlerToMinute(dataObject.value.startEventTime)
const endEvent = timeHandlerToMinute(dataObject.value.startEventTime) + dataObject.value.durationEvent

const timeRange = computed(() => RangeTimeFunc(props.data.startEventTime, Number(props.data.durationEvent))) // for timeRange "14:00-15:00"
const isReport = ref(props.data.isReport) // definer type of Block: breakTime or Event

function currentReportTracker () {
    if (startEvent <= currentTime.value && currentTime.value < endEvent) {
        store.commit('startEventTimeMutation', { startEventTime: timeHandlerToMinute(props.data.startEventTime) })
        store.commit('durationEventTimeMutation', { durationEventTime: props.data.durationEvent })
        isAciveReport.value = true
    } else {
        isAciveReport.value = false
    }
}
currentReportTracker()

watch(currentTime, () => currentReportTracker())// tracker for activate current Event
</script>

<template>
    <div class="reportBlock" >
        <div class="relation" :class="{breakTime:isReport==false}">
            <div class="circle" :class="{active:isAciveReport==true}"></div>
            <div class="line" :class="{active:isAciveReport==true}"></div>
        </div>
        <div class="contentBlock" :class="[{breakTime:isReport==false},{active:isAciveReport}]">
            <ProgressBarComp :isReport="isReport.valueOf" v-if="isAciveReport==true&&isReport"/>
            <div class="content">
                <div class="timeRow" :class="{active:!isReport}">
                    <div class="timeRange" :class="{unactive:isAciveReport==false}">{{timeRange}}</div>
                    <div class="timeLeft" v-if="isReport"><div v-if="isAciveReport">{{ leftTimeEventHandler() }}</div></div>
                    <div class="breakTimeTitle" :class="{active:isAciveReport}" v-else>{{ data.event }}</div>
                </div>
                <div class="optionalBlock" :class="{active:isReport}">
                    <AuthorsBlock :speakersData="data.speakersData" :isAciveReport="isAciveReport"/>

                    <div class="themeTitle" :class="{unactive:isAciveReport==false}">{{data.event}}</div>

                    <div class="footerAnnotation">
                        <div :class="{active:isAciveReport}">{{data.typeEvent}}</div>
                        <div :class="{active:isAciveReport}">{{data.language}}</div>
                        <div :class="{active:isAciveReport}">{{data.titleEvent}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>