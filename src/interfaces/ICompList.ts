import { DefineComponent } from 'vue'

export default interface ICompList{
    name:string,
    component: DefineComponent<{}, {}, any>;
}