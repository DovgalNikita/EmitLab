export const progressBarHandler = (startEventTime, endEventTime, currentTime) => {
    const progressValue = (currentTime - startEventTime) / (endEventTime - startEventTime) * 100
    return progressValue
}