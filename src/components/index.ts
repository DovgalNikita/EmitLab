import { App } from 'vue'
import ICompList from '../interfaces/ICompList'
import HeaderComp from './HeaderComp.vue'
import FooterComp from './FooterComp.vue'
import MainComp from './MainComp.vue'
import ReportBlock from './ReportBlock.vue'
import ProgressBarComp from './ProgressBarComp.vue'
import AuthorsBlock from './AuthorsBlock.vue'
import VerticalLine from './VerticalLine.vue'
import FetchData from './FetchData.vue'

const compList: ICompList[] = [
    { name: 'HeaderComp', component: HeaderComp },
    { name: 'FooterComp', component: FooterComp },
    { name: 'MainComp', component: MainComp },
    { name: 'ReportBlock', component: ReportBlock },
    { name: 'ProgressBarComp', component: ProgressBarComp },
    { name: 'AuthorsBlock', component: AuthorsBlock },
    { name: 'VerticalLine', component: VerticalLine },
    { name: 'FetchData', component: FetchData }

]

export default {
    install (app: App) {
        compList.map(({ name, component }: ICompList) => app.component(name, component))
    }
}
