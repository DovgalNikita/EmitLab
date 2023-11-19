import { store } from '@/store'
import { ref } from 'vue'

const stateVuex = store.state
const currentTime = ref(stateVuex.currentTime)