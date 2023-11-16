import IFetchData from '../interfaces/IFetchData'

export const dataHandler = (data : IFetchData[]) => {
    data.map((item:IFetchData) => {
        const speakerBuffer = []
        const photoBuffer = []
        Object.keys(item).map((key) => {
            if (item[key].toString() === '-') {
                item.isReport = false
            } else {
                item.isReport = true
            }

            if (key === 'speakers' && item[key] !== '-') {
                item[key].split(';').map((item) => {
                    const [FIO, position] = item.split('/')
                    const [name, surname] = FIO.trim().split(' ')
                    speakerBuffer.push({ name, surname, position })
                    return ''
                })
                item.speakerPhotos.split(';').map((item) => {
                    photoBuffer.push(item)
                    return ''
                })
                speakerBuffer.map((item, index) => {
                    item.photo = photoBuffer[index]
                    return ''
                })
                item.speakersData = speakerBuffer
            }
            return ''
        })
        delete item.speakerPhotos
        delete item.speakers
        return ''
    })
    console.log(data)
    return data
}