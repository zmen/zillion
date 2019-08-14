<template>
  <div class="zl-tab-item" @click="onClick">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tab from './Tab.vue';

@Component
export default class TabItem extends Vue {

  private get index() {
    return this.$parent.$children.indexOf(this);
  }

  private onClick() {
    (this.$parent as Tab).setActive(this.index);
  }
}
</script>


<style lang="scss">
.zl-tab-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  min-width: 25%;
}
</style>