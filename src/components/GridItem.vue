<template>
  <div class="zl-grid-item" :style="gridStyle">
    <div class="zl-grid-item__content" :style="contentStyle">
      <slot name="icon">
        <icon v-if="icon" :name="icon" />
      </slot>
      <slot name="text">{{ text }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: { Icon },
})
export default class GridItem extends Vue {

  @Prop({default: 'text'}) private readonly text!: string;

  @Prop() private readonly icon!: string;

  get gridStyle() {
    // @ts-ignore
    const { column } = this.$parent;
    const percent = (100 / column) + '%';
    return {
      flexBasis: percent,
      paddingTop: percent,
    };
  }

  get contentStyle() {
    // @ts-ignore
    const { gutter, column } = this.$parent;
    const index = this.$parent.$children.indexOf(this);
    const style = {
      marginRight: '0px',
      marginTop: '0px',
    };
    if (gutter) {
      style.marginRight = gutter + 'px';
      if (index >= column) {
        style.marginTop = gutter + 'px';
      }
    }
    return style;
  }
}
</script>

<style lang="scss" scoped>
.zl-grid-item {
  position: relative;
  text-align: center;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 1px solid #ebedf0;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }
}
</style>

