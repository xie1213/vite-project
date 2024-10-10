import { type App } from 'vue';
import SvgIcon from "./SvgIcon.vue";
import 'virtual:svg-icons-register';
/**
 * Svg图标插件
 */
export default {
    install: (app: App): void => {
        app.component('svg-icon', SvgIcon);
    },
};
