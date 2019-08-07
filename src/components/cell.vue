<template>
  <div class="zl-cell" :class="{disabled: disabled}">
    <div class="zl-cell__info">
      <div class="zl-cell__title"><slot /><span>{{ title }}</span></div>
      <div class="zl-cell__value">{{ content }}</div>
    </div>
    <div class="zl-cell__description">{{ description }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Cell extends Vue {

  @Prop({default: 'title'}) private readonly title!: string;

  @Prop({default: ''}) private readonly content!: string;

  @Prop({default: ''}) private readonly description!: string;

  @Prop({default: false}) private readonly disabled!: boolean;
}
</script>

<style lang="scss" scoped>
.zl-cell {
  background: #fff;
  position: relative;
  &__info {
    display: flex;
    justify-content: space-between;
    height: 3em;
    line-height: 3em;
    padding-left: 6px;
    box-sizing: border-box;
    &__value {
      flex: 1;
    }
  }
  &__description {
    font-size: 14px;
    color: #9b9b9b;
  }
  &__title {
    text-transform: capitalize;
    span {
      margin-left: 4px;
    }
  }
  &.disabled &__title{
    color: #ebedf0;
  }
  &::after {
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #ebedf0;
    width: 100%;
    display: block;
    transform: scaleY(.5);
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
}
</style>
