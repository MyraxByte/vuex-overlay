import { useStorage } from "@vueuse/core";

export const SET_OPEN = (state, payload) => {
  state.open = payload
}

export const SET_PAGE = (state, payload) => {
  state.page = payload
}

export const SET_THEME = (state, theme) => {
  state.theme = theme;
  useStorage('vo-tool:theme').value = theme;
}