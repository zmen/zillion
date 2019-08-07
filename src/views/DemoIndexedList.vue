<template>
  <div class="demo-indexed-list">
    <indexed-list>
      <indexed-list-anchor index="A">A</indexed-list-anchor>
      <cell title="阿尔山市"></cell>
      <cell title="阿克苏"></cell>
      <cell title="阿拉善"></cell>
      <cell title="阿勒泰"></cell>
      <cell title="阿里"></cell>
      <cell title="安康"></cell>
      <cell title="安顺"></cell>
      <indexed-list-anchor index="B">B</indexed-list-anchor>
      <cell title="百色"></cell>
      <cell title="包头"></cell>
      <cell title="北海"></cell>
      <cell title="北京"></cell>
      <cell title="博乐"></cell>
      <indexed-list-anchor index="C">C</indexed-list-anchor>
      <cell title="常德"></cell>
      <cell title="常州"></cell>
      <cell title="长春"></cell>
      <cell title="长沙"></cell>
      <cell title="成都"></cell>
      <cell title="重庆"></cell>
      <indexed-list-anchor index="D">D</indexed-list-anchor>
      <cell title="大理"></cell>
      <cell title="大同"></cell>
      <cell title="东营"></cell>
      <cell title="敦煌"></cell>
      <indexed-list-anchor index="E">E</indexed-list-anchor>
      <cell title="鄂尔多斯"></cell>
      <indexed-list-anchor index="F">F</indexed-list-anchor>
      <cell title="佛山"></cell>
      <cell title="福州"></cell>
      <indexed-list-anchor index="G">G</indexed-list-anchor>
      <cell title="格尔木"></cell>
      <cell title="广汉"></cell>
      <cell title="广元"></cell>
      <cell title="广州"></cell>
      <cell title="桂林"></cell>
      <cell title="贵阳"></cell>
    </indexed-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IndexedList from '@/components/IndexedList.vue';
import IndexedListAnchor from '@/components/IndexedListAnchor.vue';
import Cell from '@/components/Cell.vue';

@Component({
  components: {
    IndexedList,
    IndexedListAnchor,
    Cell,
  },
})
export default class DemoIndexedList extends Vue {

}
</script>
