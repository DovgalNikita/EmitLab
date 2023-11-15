export const updateFormattedDate = () => {
    const date = new Date()
    const day = date.toLocaleString('ru-RU', { weekday: 'short' })
    const time = date.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    return [day, time]
}

export const timeHandlerToMinute = (time:string) => {
    const [hour, minute] = time.split(':')
    return Number(hour) * 60 + Number(minute)
}

export const formaterTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    let handledMins = ''
    handledMins = mins < 10 ? '0' + mins : String(mins)
    return String(hours) + ':' + handledMins
}

export const RangeTimeFunc = (startEventTime:string, durationEvent:number) => {
    return `${startEventTime}-${formaterTime(timeHandlerToMinute(startEventTime) + durationEvent)}`
}

export const leftTimeHandler = () => {
    console.log()
}