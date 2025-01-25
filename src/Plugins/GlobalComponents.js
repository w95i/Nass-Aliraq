import { ButtonComponent } from "@/components/index";
import { FontAwesomeIcon } from "../assets/Fontawesome/FontAwesome";


const GlobalComponents = {
    install(Vue) {
        Vue.component("c-button" , ButtonComponent)
        Vue.component("font-awesome-icon", FontAwesomeIcon)
    },
};

export default GlobalComponents;