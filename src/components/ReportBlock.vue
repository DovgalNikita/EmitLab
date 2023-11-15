<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import { RangeTimeFunc } from '../utils/timeHandler'

const testBool = true

const props = defineProps({
    data: {
        type: Object,
        default: () => ({
            id: '',
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

const timeRange = computed(() => RangeTimeFunc(props.data.startEventTime, props.data.durationEvent))
const isReport = ref(props.data.isReport)

</script>

<template>
    <div class="reportBlock" >
        <div class="relation" :class="{breakTime:isReport==false}">
            <div class="circle" :class="{active:testBool==true}"></div>
            <div class="line" :class="{active:testBool==true}"></div>
        </div>
        <div class="contentBlock" :class="[{breakTime:isReport==false},{active:testBool}]">
            <ProgressBarComp :isReport="isReport.value" v-if="testBool==true&&isReport"/>
            <div class="content">
                <div class="timeRow" :class="{active:!isReport}">
                    <div class="timeRange" :class="{unactive:testBool==false}">{{timeRange}}</div>
                    <div class="timeLeft" v-if="isReport"><div v-if="testBool">осталось 16 мин</div></div>
                    <div class="breakTimeTitle" :class="{active:testBool}" v-else>{{ data.event }}</div>
                </div>
                <div class="optionalBlock" :class="{active:isReport}">
                    <AuthorsBlock />

                    <div class="themeTitle" :class="{unactive:testBool==false}">{{data.event}}</div>

                    <div class="footerAnnotation">
                        <div :class="{active:testBool}">{{data.typeEvent}}</div>
                        <div :class="{active:testBool}">{{data.language}}</div>
                        <div :class="{active:testBool}">{{data.titleEvent}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>