<template>
  <button class="vo-toggle-btn" @click="onToggle()">
    <i class="fas fa-cogs"></i>
  </button>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: 'vo-overlay-toggle',
  setup() {
    const store = useStore();

    const onToggle = () => store.dispatch("vuexOverlay/onToggle");

    return {
      onToggle
    }
  }
}
</script>