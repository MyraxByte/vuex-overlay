<template>
  <header class="vo-header">
    <div class="vo-container">

      <div class="vo-header-brand">
        <img v-if="theme === 'light'" class="vo-header-brand__icon" src="../assets/logo-light.png">
        <img v-else class="vo-header-brand__icon" src="../assets/logo-dark.png">
        <span class="vo-header-brand__name">VuexOverlay</span>
      </div>

      <div class="vo-header-pages">
        <vo-page-item
            v-for="(page, i) of pages"
            :page="page.name"
            :icon="page.icon"
            :name="page.title || page.name"
            :key="i"/>
      </div>

      <div class="flex-grow"></div>

      <div class="vo-header-menu">
        <vo-theme-btn />
        <button @click="onToggle()" class="vo-header-menu__btn">
          <i class="fas fa-times"></i>
          <div class="vo-header-menu__btn-background"></div>
        </button>
      </div>
    </div>
  </header>
</template>

<script>

import { useStore } from "vuex";

import VoPageItem from "./btn-page.vue";
import VoThemeBtn from "./btn-theme.vue";
import {computed} from "vue";

export default {
  name: "vo-app-header",
  components: {
    'vo-theme-btn': VoThemeBtn,
    'vo-page-item': VoPageItem
  },
  setup() {
    const store = useStore();

    const onToggle = () => store.dispatch("vuexOverlay/onToggle");
    const theme = computed(() => store.state.vuexOverlay.theme)

    const pages = [
      { name: 'states', icon: 'fas fa-sitemap' },
      { name: 'getters', icon: 'fas fa-project-diagram' },
      { name: 'mutations', icon: 'fas fa-cogs' }
    ]

    return {
      onToggle,
      pages,
      theme
    };
  },
};
</script>
