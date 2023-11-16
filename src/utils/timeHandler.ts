import { store } from '@/store'

//  updateCurrentTime
export const updateFormattedDate = () => {
    const date = new Date()
    const day = date.toLocaleString('ru-RU', { weekday: 'short' })
    const time = date.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    store.commit('currentDayMutation', { currentDay: day })
    store.commit('currentTimeMutation', { currentTime: timeHandlerToMinute(time) })
    return [store.state.currentDay, formaterTime(store.state.currentTime)] // return in format "hh:mm"
}

//  transform "hh:mm" to minute
export const timeHandlerToMinute = (time:string) => {
    const [hour, minute] = time.split(':')
    return Number(hour) * 60 + Number(minute)
}

//  transform minute to "hh:mm"
export const formaterTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    let handledMins = ''
    handledMins = handlerMins(mins)
    return String(hours) + ':' + handledMins
}

const handlerMins = (minutes:number) => {
    return minutes < 10 ? '0' + minutes : String(minutes)
}

// format to "14:00-14:30" (startEventTime - endEventTime)
export const RangeTimeFunc = (startEventTime:string, durationEvent:number) => {
    return `${startEventTime}-${formaterTime(timeHandlerToMinute(startEventTime) + durationEvent)}`
}

// calculate leftTimeEvent
export const leftTimeEventHandler = () => {
    const timeLeftMinute = (store.state.startEventTime + store.state.durationEventTime) - store.state.currentTime
    const hours = Math.floor(timeLeftMinute / 60)
    const mins = timeLeftMinute % 60
    const handledMins = mins < 10 ? '0' + mins : String(mins)
    if (timeLeftMinute >= 3600) {
        switch (timeLeftMinute) {
            case 3600: return `остался ${hours} часа ${handledMins} минут`
            default: return `осталось ${hours} часа ${handledMins} минут`
        }
    } else if (timeLeftMinute >= 0 && timeLeftMinute < 3600) {
        return `Осталось ${mins} минут`
    } else {
        return 'Событие не началось'
    }
}