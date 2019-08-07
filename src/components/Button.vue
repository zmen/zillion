<template>
  <button class="zl-button"
    :class="buttonClass"
  >
    <icon class="zl-button__loading" v-if="loading" name="Loading" :animate="true" />
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {
    Icon,
  },
})
export default class Button extends Vue {

  @Prop({default: false}) private readonly loading!: boolean;

  @Prop({default: 'default'}) private readonly type!: string;

  @Prop({default: false}) private readonly round!: boolean;

  @Prop({default: 'normal'}) private readonly size!: string;

  @Prop({default: false}) private readonly disabled!: boolean;

  private get buttonClass() {
    return {
      primary: this.type === 'primary',
      danger: this.type === 'danger',
      round: this.round,
      large: this.size === 'large',
      disabled: this.disabled,
    };
  }
}
</script>

<style lang="scss" scoped>

.zl-button {
  font-size: 14px;
  height: 3em;
  border: 1px solid #eee;
  background: #fff;
  outline: none;
  border-radius: 2px;
  color: #323232;
  padding: 0 2em;
  &__loading {
    margin: 0 .5em;
  }
  &.primary {
    color: #fff;
    background: #108ee9;
    border: 1px solid #108ee9;
  }
  &.danger {
    color: #fff;
    background: #f44;
    border: 1px solid #f44;
  }
  &.round {
    border-radius: 100px;
  }
  &.large {
    width: 100%;
  }
  &.disabled {
    opacity: .5;
  }
}

</style>


