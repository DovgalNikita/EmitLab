import file from '../data/reports_1.json'
import { dataHandler } from '../utils/dataHandler'

export const fetchData = () => {
    const dataJSON = file
    return dataHandler(dataJSON)
}