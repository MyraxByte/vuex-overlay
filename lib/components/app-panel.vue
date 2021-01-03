<template>
  <div class="vo-panel__wrapper">
    <vo-app-header />
    <div class="vo-panel__content">
      <div class="vo-panel__container">
        <component :is="page" />
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

import Header from "./app-header.vue";

import State from "../pages/states.vue";
import Getters from "../pages/getters.vue";
import Mutations from "../pages/mutations.vue";

export default {
  name: 'vo-app-panel',
  components: {
    'vo-app-header': Header,
    'vo-app-states': State,
    'vo-app-getters': Getters,
    'vo-app-mutations': Mutations,
  },
  setup() {
    const store = useStore();
    const page = computed(() => `vo-app-${store.state.vuexOverlay.page}`);

    return { page }
  },
}
</script>


<style scoped>

.store-tool__content::-webkit-scrollbar {
  width: 16px;
}

[data-theme="dark"] .store-tool__content::-webkit-scrollbar-track {
  background-color: #0e0e0e;
}

[data-theme="dark"] .store-tool__content::-webkit-scrollbar-thumb {
  background-color: var(--ui-hover);
  border-radius: 8px;
  border: 4px solid #0e0e0e
}
[data-theme="light"] .store-tool__content::-webkit-scrollbar-track {
  background-color: #e2e2e2;
}

[data-theme="light"] .store-tool__content::-webkit-scrollbar-thumb {
  background-color: #b3b8be;
  border-radius: 8px;
  border: 4px solid #E2E2E2
}
[data-theme="light"] .store-tool__content::-webkit-scrollbar-thumb:hover {
  background-color: #949CA7;
}
[data-theme="dark"] .store-tool__content::-webkit-scrollbar-thumb:hover {
  background-color: var(--ui-hover-light);
}

</style>
