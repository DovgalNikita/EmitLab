export default interface IFetchData{
    id: number
    event: string,
    startEventTime: string,
    durationEvent: string,
    speakers: string,
    speakerPhotos: string,
    typeEvent: string,
    language: string,
    titleEvent: string,
    isReport?:boolean
}