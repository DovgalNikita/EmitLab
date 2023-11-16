import file from '../data/reports_1.json'
import { dataHandler } from '../utils/dataHandler'

export const fetchData = () => {
    const dataJSON = file
    const handledData = dataHandler(dataJSON)
    return handledData
}