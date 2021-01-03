export const onToggle = ({ commit, state }) => {
  commit("SET_OPEN", !state.open)
};

export const init = ({ commit, state }) => {
  commit("SET_OPEN", false)

  document.body.setAttribute('data-vo-tool', String(state.open))
  document.body.setAttribute('data-vo-theme', String(state.theme))
};

export const setPage = ({ commit, state }, payload) => {
  if (state.page !== payload) commit("SET_PAGE", payload)
};

export const setTheme = ({ commit, state }, theme) => {
  if (theme !== state.theme) commit("SET_THEME", theme)
}