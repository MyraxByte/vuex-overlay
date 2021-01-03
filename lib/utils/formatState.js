export const formatState = (store) => {
  const root = {}
  const state = {}

  const modules = Object
    .keys(store._modulesNamespaceMap)
    .map(key => key.split('/')[0])
    .filter(key => key !== 'vuexOverlay')

  Object.keys(store.state)
    .filter(key => key !== 'vuexOverlay')
    .forEach(key => {
      if(!modules.includes(key)) root[key] = store.state[key]
      else state[key] = store.state[key]
    })

  return {
    modules: [ 'root', ...modules ],
    state: { ...state, root }
  }
}