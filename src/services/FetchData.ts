import IFetchData from '@/interfaces/IFetchData'
import file from '../data/reports_1.json'
import { dataHandler } from '../utils/dataHandler'
import { store } from '@/store'

export const fetchData = () => {
    const dataJSON = file
    const handledData = dataHandler(dataJSON)
    return handledData
}

export let fetchingData: IFetchData [] = fetchData()
store.commit('fetchindDataMutation', { fetchindData: fetchingData })

export const updateFetchindData = () => {
    fetchingData = fetchData()
    store.commit('fetchindDataMutation', { fetchindData: fetchingData })
}