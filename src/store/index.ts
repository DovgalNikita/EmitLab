import IFetchData from '@/interfaces/IFetchData'
import { createStore } from 'vuex'

interface stateVuex{
    startEventTime: number,
    durationEventTime: number,
    currentTime: number,
    currentDay: string,
    fetchindData: IFetchData[],
    pointerData: number,
    pointerRangeData:number
}

const initialState: stateVuex = {
    startEventTime: 0,
    durationEventTime: 0,
    currentTime: 0,
    currentDay: '',
    fetchindData: [],
    pointerData: 0,
    pointerRangeData: 0
}

export const store = createStore({
    state: initialState,
    mutations: {
        currentTimeMutation (state, payload) {
            state.currentTime = payload.currentTime
        },
        currentDayMutation (state, payload) {
            state.currentDay = payload.currentDay
        },
        startEventTimeMutation (state, payload) {
            state.startEventTime = payload.startEventTime
        },
        durationEventTimeMutation (state, payload) {
            state.durationEventTime = payload.durationEventTime
        },
        fetchindDataMutation (state, payload) {
            state.fetchindData = payload.fetchindData
        }
    }
})