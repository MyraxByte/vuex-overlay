## Vuex Overlay Tool
Vuex state monitoring tool (for Vue 3) - temporary alternative instead of vue-devtools (vuex functionality)

## Getting Started
Install
```bash
$ npm install vuex-overlay-tools

# or
$ yarn add vuex-overlay-tools
```

## Usage
*not working without Vuex store*
```js
import { createApp } from "vue";
import VuexOverlay from "vuex-overlay-tools"

import { store } from "./store"
import App from "./App.vue"

createApp(App)
  .use(store)
  .use(VuexOverlay) // add plugin to application
  .mount('#app')
```

## Note
* Working currently only with vuex modules

## Preview
*After adding the plugin to your application, you can open the overlay with your store*

![](https://media.giphy.com/media/I2r81qElqGh3pAkik5/giphy.gif)

*Time travel is also supported*

![](https://media.giphy.com/media/CPcHTbQDzCJKi5vSY7/giphy.gif)