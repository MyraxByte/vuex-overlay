<template>
  <div class="vo-store-mutations__card">
    <div class="vo-store-mutations__card-header">
      <h4>Mutations History</h4>
      <div class="counter">
        <span>Executed</span>
        <span class="size">0 {{ mutations.length }}</span>
      </div>
    </div>

    <div class="vo-store-mutations__card-body">
      <div class="vo-store-mutation__card"
           @click="setActive(mutation.id)" v-for="mutation of mutations.history"
           :key="mutation.id">
        <div class="vo-store-mutation__name">
          <div class="name">{{ mutation.type.split('/')[1] }}</div>
          <i class="fas fa-caret-left"></i>
          <div class="module">{{ mutation.type.split('/')[0] }}</div>
        </div>

        <div class="flex-grow"></div>
        <div class="travel-back" @click="setHistory(mutation)" v-if="mutations.current > mutation.id">
          <i class="fas fa-history"></i>
          <span>undo</span>
        </div>
        <div class="travel-next" @click="setHistory(mutation)" v-else-if="mutations.current < mutation.id">
          <i class="fas fa-redo"></i>
          <span>redo</span>
        </div>
        <div class="travel-current" v-if="mutations.current === mutation.id">
          <i class="fas fa-check"></i>
          <span>current</span>
        </div>
        <div class="time">
          <span>{{ mutation.time }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="vo-store-changes__card">
    <div class="vo-store-changes__card-header">
      <h4>State Changes</h4>
    </div>
    <div class="vo-store-changes__card-body" v-if="active">
      <div class="mutation__result">
        <div class="mutation__result-header">
          <span>Payload</span>
        </div>
        <div class="mutation__result-content">
          <Pretty
              :data="{ payload: mutations.history[active-1].payload }"
              :showLength="true"
              :showLine="false"
              :showDoubleQuotes="false"
              :collapsedOnClickBrackets="true"
              :deep="2" />
        </div>
      </div>

      <div class="mutation__result">
        <div class="mutation__result-header">
          <span>Prev State</span>
        </div>
        <div class="mutation__result-content">
          <Pretty
              :data="mutations.history[active-1].prevState"
              :showLength="true"
              :showLine="false"
              :showDoubleQuotes="false"
              :collapsedOnClickBrackets="true"
              :deep="2" />
        </div>
      </div>

      <div class="mutation__result">
        <div class="mutation__result-header">
          <span>Next State</span>
        </div>
        <div class="mutation__result-content">
          <Pretty
              :data="mutations.history[active-1].nextState"
              :showLength="true"
              :showLine="false"
              :showDoubleQuotes="false"
              :collapsedOnClickBrackets="true"
              :deep="2" />
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import {onMounted, ref} from "vue";
import { useStore } from "vuex";
import Pretty from "vue-json-pretty"

export default {
  components: { Pretty },
  setup() {
    const store = useStore();
    const active = ref(null)
    const mutations = store.mutationsHistory

    const setActive = (id) => (active.value = id)
    const setHistory = (mutation) => mutations.replaceState(mutation)

    onMounted(() => setActive(mutations.history[0]?.id))

    return { mutations, setActive, setHistory, active };
  },
};
</script>
