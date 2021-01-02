<template>
  <teleport to="body">
    <transition name="vo-slide">
      <vo-app-panel v-if="open" />
    </transition>
  </teleport>
  <teleport to="body">
    <transition name="vo-fade">
      <vo-toggle-btn v-if="!open" />
    </transition>
  </teleport>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";

import AppPanel from "./app-panel.vue"
import AppToggle from "./btn-toggle.vue"

export default {
  name: 'vo-app',
  components: {
    'vo-app-panel': AppPanel,
    'vo-toggle-btn': AppToggle,
  },
  setup() {
    const store = useStore();

    const open = computed(() => store.state.vuexOverlay.open);

    store.dispatch('vuexOverlay/init')

    watch(() => store.state.vuexOverlay.theme, (theme) => {
      document.body.setAttribute('data-vo-theme', String(theme))
    })
    watch(() => store.state.vuexOverlay.open, (status) => {
      document.body.setAttribute('data-vo-tool', String(status))
    })

    return { open };
  },
  created() {
    document.querySelector('#vo-toggle-btn')?.remove()
  }
};
</script>