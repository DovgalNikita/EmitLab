export const timeHandler = (time:string) => {
    const [hour, minute] = time.split(':')
    return Number(hour) * 60 + Number(minute)
}

export const timeAgreagationSum = (time1, time2) => {
     return (time2 - time1) / 60
}

export const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    let handledMins = ''
    handledMins = mins < 10 ? '0' + mins : String(mins)
    return String(hours) + ':' + handledMins
}