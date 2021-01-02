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

export default {
  name: 'vo-getters-page',
  components: { Pretty },
  setup() {
    const store = useStore();
    const getters = ref([])

    Object.keys(store.getters).forEach(key => {
      const item = { module: key.split('/')[0], values: {} }
      item.values[key.split('/')[1]] = store.getters[key] === null ? 'null' : store.getters[key]

      getters.value.push(item)
    })

    return { getters };
  },
};
</script>
