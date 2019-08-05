<template>
  <div class="zl-panel">
    <div class="zl-panel__header">
      <div class="zl-panel__title">{{ title }}</div>
      <div class="zl-panel__description">{{ description }}</div>
    </div>
    <div class="zl-panel__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
@Component
export default class Panel extends Vue {

  @Prop({default: 'title'}) private readonly title!: string;

  @Prop({default: 'description'}) private readonly description!: string;
}
</script>

<style lang="scss" scoped>
.zl-panel {
  background: #fff;
  &__header {
    padding: 10px 16px;
    box-sizing: border-box;
    position: relative;
    &::after {
      content: '';
      border-bottom: 1px solid #ebedf0;
      position: absolute;
      right: 0;
      left: 16px;
    }
  }
  &__title {
    text-transform: uppercase;
    font-weight: bold;
  }
  &__description {
    padding-bottom: 6px;
    color: #9b9b9b;
  }
  &__content {
    padding: 0 0 0 16px;
    box-sizing: border-box;
  }
}
</style>


