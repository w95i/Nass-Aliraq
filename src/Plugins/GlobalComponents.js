import { ButtonComponent } from "@/components/index";


const GlobalComponents = {
    install(Vue) {
        Vue.component("c-button" , ButtonComponent)
    },
};

export default GlobalComponents;