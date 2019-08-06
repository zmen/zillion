<template>
  <div class="zl-header">
    <div class="zl-header__left" @click="$router.go(-1)">
      <icon name="back" />
    </div>
    <div class="zl-header__center">{{ title }}</div>
    <div class="zl-header__right">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: { Icon },
})
export default class Cell extends Vue {
  @Prop({default: 'title'}) private readonly title!: string;

}
</script>

<style lang="scss">
.zl-header {
  display: flex;
  height: 43px;
  align-items: center;
  border-bottom: 1px solid #eee;
  &__left, &__center, &__right {
    flex: 1;
    padding: 0 16px;
    box-sizing: border-box;
  }
  &__center {
    text-align: center;
    text-transform: uppercase;
  }
  &__left {
    text-align: left;
  }
  &__right {
    text-align: right;
  }
  &__center {
    font-weight: 700;
  }
}
</style>


