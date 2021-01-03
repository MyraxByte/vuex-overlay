<template>
  <div class="vo-store-modules__card">
    <div class="vo-store-modules__card-header">
      <h4>All Store Modules</h4>
    </div>

    <div class="vo-store-modules__card-body">
      <div
          class="vo-store-modules__item"
          @click="onSelect(module)"
          :class="{ active: current === module }"
          v-for="(module, i) of modules"
          :key="i"
      >
        <div class="vo-store-modules__item-name">
          &lt;<span>{{ module }}</span>>
        </div>
        <span class="selected-badge" v-if="current === module">selected</span>
      </div>
    </div>
  </div>

  <div class="vo-store-state__card">
    <div class="vo-store-state__card-header">
      <h4>State: &lt<strong>{{ current }}</strong>> </h4>
    </div>
    <div class="vo-store-state__card-body">
      <Pretty
          :data="openedState"
          :showLength="true"
          :showLine="false"
          :showDoubleQuotes="false"
          :collapsedOnClickBrackets="true"
          :deep="1"
      />
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref, watch} from "vue";
import { useStore, mapState } from "vuex";
import Pretty from "vue-json-pretty"
import { formatState } from "../utils/formatState";

export default {
  name: 'vo-states-page',
  components: { Pretty },
  setup() {
    const store = useStore();
    const current = ref(null);
    const openedState = ref({});

    const { modules, state } = formatState(store)

    const onSelect = (name) => {
      current.value = name;
      openedState.value = state[name];
    };

    onMounted(() => onSelect(modules[0]))

    return {
      current,
      openedState,
      modules,
      onSelect,
    };
  },
};
</script>
