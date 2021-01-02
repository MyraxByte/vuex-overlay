## Vuex Overlay Tool
Vuex state monitoring tool (for Vue 3) - temporary alternative instead of vue-devtools (vuex functionality)

![](https://i.imgur.com/RQPG21h.png)

## Features
* overplay panel with Vuex store from your app
* mutations history
* state & getters overview
* time travel for mutations

PS. Package working with Vuex modules 

## Getting Started
Required

[Vuex 4](https://github.com/vuejs/vuex) & [Vue 3](https://github.com/vuejs/vue-next)

Install
```bash
$ npm install vuex-overlay-tools

# or
$ yarn add vuex-overlay-tools
```

## Usage
`Your application must have Vuex Store`

###### Step 1 - Add VuexOverlay plugin to you application
```js
import { createApp } from "vue";
import VuexOverlay from "vuex-overlay-tools"

import { store } from "./store" // path to vuex store
import App from "./App.vue"

createApp(App)
  .use(store) // required
  .use(VuexOverlay) // add plugin to your app
  .mount('#app')
```
###### Step 2 - Open panel with special button
![](https://i.imgur.com/YcDdvJs.png)

## Previews
###### `State Overview` 
![](https://i.imgur.com/CxFL2Dv.gif)

###### `Getters Overview`
![](https://i.imgur.com/fJBWo73.png)

###### `Mutations History`
![](https://i.imgur.com/FxiBjKJ.png)



