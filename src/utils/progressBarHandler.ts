import { store } from '@/store'

export const progressBarHandler = () => {
    const storeData = store.state
    const progressValue = (storeData.currentTime - storeData.currentTime) / ((storeData.startEventTime + storeData.durationEventTime) - storeData.startEventTime) * 100
    return progressValue
}