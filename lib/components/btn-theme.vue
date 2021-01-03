<template>
  <button @click="changeTheme()" class="vo-header-menu__theme-btn">
    <i
        v-if="dark"
        class="fas fa-moon"
    ></i>
    <svg
        class="vo-light-theme__icon"
        v-if="light"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation">
      <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path>
    </svg>
    <div class="vo-header-menu__btn-background"></div>
  </button>
</template>

<script>

import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: 'vo-theme-btn',
  setup() {
    const store = useStore();

    const dark = computed(() => store.state.vuexOverlay.theme === "dark");
    const light = computed(() => store.state.vuexOverlay.theme === "light");

    const changeTheme = () => store.dispatch("vuexOverlay/setTheme", dark.value ? 'light' : 'dark');

    return {
      dark,
      light,
      changeTheme,
    };
  }

}
</script>