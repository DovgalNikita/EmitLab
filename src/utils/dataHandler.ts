import IFetchData from '../interfaces/IFetchData'

export const dataHandler = (data : IFetchData[]) => {
    data.map((item:IFetchData) => {
        Object.keys(item).map((key) => {
            if (item[key].toString() === '-') {
                item.isReport = false
            } else {
                item.isReport = true
            }
            return ''
        })
        return ''
    })
    return data
}