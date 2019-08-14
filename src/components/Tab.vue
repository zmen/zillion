<template>
  <div class="zl-tab">
    <slot />
    <div class="zl-tab__bar" :style="barStyle">
      <div class="zl-tab__inner" :style="{'width': `${barWidth}`}"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

@Component
export default class Tab extends Vue {

  @Prop({default: '100%'}) private readonly barWidth!: string;

  @Prop() private readonly value!: number;

  private containerWidth: number = 0;

  public setActive(index: number) {
    if (index !== this.value) {
      this.$emit('change', index);
      this.$emit('input', index);
    }
  }

  private mounted() {
    this.containerWidth = this.$el.scrollWidth;
  }


  private get barStyle() {
    const childCounts = this.$children.length;
    const width = this.containerWidth / childCounts;
    return {
      width: `${width}px`,
      transform: `translateX(${this.value * width}px)`,
    };
  }
}
</script>

<style lang="scss">
.zl-tab {
  height: 42px;
  position: relative;
  width: 100%;
  display: flex;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  &__bar {
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: transform .3s;
  }

  &__inner {
    width: 100%;
    background: #108ee9;
    height: 2px;
    margin: 0 auto;
  }
}
</style>