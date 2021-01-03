<template>
  <div class="vo-store-getters">
    <div class="vo-store-getters__card-header">
      <h4>All Store Getters</h4>
    </div>
    <div class="vo-store-getters__card-body">
      <div class="vo-getter__inner" v-for="(item, i) of getters" :key="i">
        <div class="vo-getter__card">
          <div class="vo-getter__card-header">
            &lt;<span>{{  item.module }}</span>>
          </div>
          <div class="vo-getter__card-content">
            <Pretty
                :data="item.values"
                :showLength="true"
                :showLine="false"
                :showDoubleQuotes="false"
                :collapsedOnClickBrackets="true"
                :deep="2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import { useStore } from "vuex";
import Pretty from "vue-json-pretty"
import { formatGetters } from "../utils/formatGetters";

export default {
  name: 'vo-getters-page',
  components: { Pretty },
  setup() {
    const store = useStore();
    const getters = ref([])

    const storeGetters = formatGetters(store)

    Object.keys(storeGetters.getters).forEach(key => {
      const item = { module: key, values: {} }
      item.values = storeGetters.getters[key] === null ? 'null' : storeGetters.getters[key]
      getters.value.push(item)
    })

    return { getters };
  },
};
</script>
