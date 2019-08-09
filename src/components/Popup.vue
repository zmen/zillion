<template>
  <transition :name="transitionName">
    <div class="zl-popup" v-if="value" :class="'zl-popup__' + position">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Watch,
  Vue,
} from 'vue-property-decorator';

@Component
export default class Popup extends Vue {

  @Prop({default: false}) private readonly value!: boolean;

  @Prop({default: 'center'}) private readonly position!: string;

  @Watch('value')
  private onValueChange(newVal: boolean, val: boolean) {
    const action: string = newVal ? 'open' : 'close';
    this[action as keyof Popup].call(this);
  }

  get transitionName(): string {
    return this.position === 'center'
      ? 'zl-fade'
      : `zl-popup-slide-${this.position}`;
  }

  private open() {
    this.$emit('open');
  }

  private close() {
    this.$emit('close');
  }
}
</script>

<style lang="scss" scoped>
.zl-popup {
  position: fixed;
  max-height: 100%;
  -webkit-overflow-scrolling: touch;
  transition: all .3s ease-out;
  &__center {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}

.zl-fade {
  &-enter-active {
    animation: .3s zl-fade-in;
  }
  &-leave-active {
    animation: .3s zl-fade-out;
  }
}

@keyframes zl-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zl-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

</style>


