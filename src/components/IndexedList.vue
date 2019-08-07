<template>
  <div
    class="zl-indexed-list"
    @scroll="scrollHandler"
  >
    <div
      @touchstart="touchStart"
      @touchmove="onTouchMove"
      class="zl-indexed-list__sidebar">
      <div
        class="zl-indexed-list__index"
        v-for="(value, index) in list"
        :class="{'active': index === activeIndex}"
        :key="index"
        :data-index="index"
        @click="clickIndex(index)"
        >{{ value.index }}</div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TouchMixin from '@/mixins/touch.ts';
import IndexedListAnchor from './IndexedListAnchor.vue';

@Component
export default class IndexedList extends TouchMixin {

  public list: IndexedListAnchor[] = [];

  public offsets: number[] = [];

  private selfOffset: number = 0;

  private activeIndex: number = 0;

  private get relativeOffsets() {
    return this.offsets.map((offset) => offset - this.selfOffset);
  }

  private mounted() {
    this.selfOffset = this.$el.getBoundingClientRect().top;
  }

  private scrollHandler() {
    const scrollTop = this.$el.scrollTop;
    for (let i = 0; i < this.relativeOffsets.length; i++) {
      if (scrollTop <= this.relativeOffsets[i]) {
        this.activeIndex = i;
        break;
      }
    }
  }

  private onTouchMove(event: TouchEvent) {
    this.touchMove(event);

    if (event.cancelable) {
      event.preventDefault();
    }

    const { clientX, clientY } = event.touches[0];
    const target = document.elementFromPoint(clientX, clientY) as HTMLInputElement;
    if (target) {
      const { index } = target.dataset;
      if (typeof index !== 'undefined') {
        this.clickIndex(+index);
      }
    }
  }

  private clickIndex(index: number) {
    const scrollInto = this.relativeOffsets[index];
    this.$el.scrollTop = scrollInto;
    this.activeIndex = index;
  }
}
</script>

<style lang="scss" scoped>
.zl-indexed-list {
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  &__sidebar {
    font-family: monospace;
    font-size: 16px;
    z-index: 1;
    position: fixed;
    top: 50%;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
  }
  &__index {
    padding: 0 6px 0 16px;
    &.active {
      color: #108ee9;
    }
  }
}
</style>



