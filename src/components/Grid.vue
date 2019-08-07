<template>
  <div class="zl-grid" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({})
export default class Grid extends Vue {

  @Prop({default: 4}) public readonly column!: number;

  @Prop({default: 0}) public readonly gutter!: number;

  @Prop() private readonly title!: string;

  get style() {
    return this.gutter ? { paddingLeft: this.gutter + 'px' } : undefined;
  }
}
</script>

<style lang="scss" scoped>
.zl-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
</style>
