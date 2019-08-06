<template>
  <i
    class="zl-icon iconfont"
    :class="className"
    :style="{'font-size': scale + 'em'}"
  ></i>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';
@Component({})
export default class Icon extends Vue {
  @Prop() private readonly name!: string;
  @Prop({default: 1}) private readonly scale!: number;
  @Prop({default: false}) private readonly animate!: boolean;

  get className() {
    const obj: any = {};
    obj['icon-' + this.name] = true;
    obj.animate = this.animate;
    return obj;
  }
}
</script>


<style lang="scss" scoped>
@import '../styles/iconfont.css';
.zl-icon {
  display: inline-block;
  &.animate {
    animation: cycling 1s linear infinite;
  }
}
@keyframes cycling {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
