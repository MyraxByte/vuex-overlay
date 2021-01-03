export const formatGetters = (store) => {
  const root = {}
  const getters = {}

  const modules = Object
    .keys(store._modulesNamespaceMap)
    .map(key => key.split('/')[0])
    .filter(key => key !== 'vuexOverlay')

  Object.keys(store.getters)
    .map(key => key.split('/')[0])
    .filter(key => key !== 'vuexOverlay')
    .forEach(key => {
      if(!modules.includes(key)) root[key] = store.getters[key]
      else Object.keys(store.getters).forEach(k => {
        if (k.split('/')[0] === key) {
          getters[key] = {}
          getters[key][k.split('/')[1]] = store.getters[k]
        }
      })
    })

  return {
    modules: [ 'root', ...modules ],
    getters: { root, ...getters }
  }
}