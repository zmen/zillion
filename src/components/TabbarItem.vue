<template>
  <div
    :class="'zl-tabbar-item' + (active ? '--active': '--inactive')"
    @click="onClick"
  >
    <div class="zl-tabbar-item__icon" v-if="icon">
      <icon :name="icon" :scale="1.5" />
    </div>
    <div class="zl-tabbar-item__text">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { VNode } from 'vue';
import {
  Component,
  Prop,
  Inject,
  Vue,
} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

// move it to util
function flattenVNodes(vnodes: VNode[]) {
  const result: VNode[] = [];

  function traverse(ivnodes: VNode[]) {
    vnodes.forEach((vnode) => {
      result.push(vnode);
      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

@Component({
  components: { Icon },
})
export default class TabbarItem extends Vue {

  @Prop() private readonly name!: number | string;

  @Prop() private readonly icon!: string;

  @Inject() private readonly parent: any;

  private active: boolean = false;

  private mounted(): void {
    this.bindToParent();
  }

  private beforeDestroy(): void {
    if (!this.parent) { return; }
    this.parent.children = this.parent.children.filter((item: any) => item !== this);
  }

  private bindToParent(): void {
    if (!this.parent || this.parent.children.indexOf(this) > -1) { return; }

    const children = [...this.parent.children, this];
    const vnodes = flattenVNodes(this.parent.$slots.default);
    children.sort((a, b) => vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode));
    this.parent.children = children;
  }

  private onClick(): void {
    this.parent.onChange(this.name);
  }
}
</script>

<style lang="scss" scoped>
.zl-tabbar-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 14px;
}
.zl-tabbar-item--active {
  @extend .zl-tabbar-item;
  color: #108ee9;
}
.zl-tabbar-item--inactive {
  @extend .zl-tabbar-item;
}
</style>
