import ISpeakersData from './ISpeakersData'

export default interface IFetchData{
    id: number
    event: string,
    startEventTime: string,
    durationEvent: number,
    speakersData?: ISpeakersData []
    speakers?: string,
    speakerPhotos?: string,
    typeEvent: string,
    language: string,
    titleEvent: string,
    isReport?:boolean,
    isActive?:boolean
}