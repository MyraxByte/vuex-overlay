import {useStorage} from "@vueuse/core";

export default () => ({
    theme: useStorage('vo-tool:theme', 'light').value,
    open: useStorage('vo-tool:open', false).value,
    page: 'states'
})