export const replaceState = (store) => {
  return (mutation) => {
    store.mutationsHistory.current = mutation.id
    store.replaceState({
      ...mutation.afterState,
      vuexOverlay: store.state.vuexOverlay
    })
  }
}