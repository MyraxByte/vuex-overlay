<template>
  <div class="vo-header-pages__item" @click="setPage(page)" :class="{ active: currentPage === page }">
    <i v-if="icon" :class="icon"></i>
    <span>{{ name }}</span>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: 'vo-page-item',
  props: {
    icon: {
      type: String,
    },
    page: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    const store = useStore();

    const currentPage = computed(() => store.state.vuexOverlay.page);
    const setPage = (page) => store.dispatch('vuexOverlay/setPage', page)

    return {
      currentPage,
      setPage
    }
  }
}
</script>