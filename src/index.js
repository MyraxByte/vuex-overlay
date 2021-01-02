import {createApp, reactive} from "vue";
import {replaceState} from "./utils/replaceState"

import {handleMutations} from "./handlers/mutationsHistory";
import appComponent from "./components/app.vue"
import appState from './store'

import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.css";

export const install = (vue) => {
  const store = vue.config.globalProperties.$store;

  // Vuex store not found
  if (!store) {
    return console.warn('[vuex-overlay] vuex store not found')
  }

  /**
   * Register History
   */
  registerHistory(store)

  /**
   * Register state for Vuex Overlay
   */
  registerLocalState(store)

  /**
   * Register handlers
   */
  registerHandlers(store)

  /**
   * Init Vuex Overlay App
   */
  createOverlay(store)
}

/**
 * Create Overlay Application & mount
 * @param {*} store 
 */
export const createOverlay = (store) => {
    const app = document.querySelector('body');
    const element = document.createElement('div')

    element.id = 'vo-toggle-btn'
    app.appendChild(element)

    createApp(appComponent).use(store).mount('#vo-toggle-btn')
}

/**
 * Register Vuex Overlay State
 * @param {*} store 
 */
export const registerLocalState = (store) => {
  store.registerModule("vuexOverlay", appState)
}

/**
 * Register Mutations History
 * @param story
 */
export const registerHistory = (store) => {
  store.mutationsHistory = reactive({
    current: null,
    history: [],
    replaceState: replaceState(store)
  })
}

/**
 * Register Vuex Overlay Handlers
 * @param store
 */
export const registerHandlers = (store) => {
  // handler for mutations
  store.subscribe(handleMutations(store))
}

export default {
  install
}