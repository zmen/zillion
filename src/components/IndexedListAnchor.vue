<template>
  <div class="zl-indexed-list-anchor">
      <slot />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

import IndexedList from './IndexedList.vue';

@Component
export default class IndexedListAnchor extends Vue {

  @Prop() private readonly index!: number|string;

  private mounted() {
    const { list, offsets } = this.$parent as IndexedList;
    if (list.indexOf(this) === -1) {
        list.push(this);
        offsets.push(this.$el.getBoundingClientRect().top);
    }
  }
}
</script>

<style lang="scss" scoped>
.zl-indexed-list-anchor {
  background: #efefef;
  padding: 4px 6px;
  box-sizing: border-box;
}
</style>