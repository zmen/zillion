<template>
  <div class="zl-demo-tabbar">
    <panel title="text" description="display without icon">
      <tabbar v-model="tabbarI">
        <tabbar-item name="memu1">Memu1</tabbar-item>
        <tabbar-item name="memu2">Memu2</tabbar-item>
        <tabbar-item name="memu3">Memu3</tabbar-item>
      </tabbar>
    </panel>
    <panel title="icon" description="display with predefined icon">
      <tabbar v-model="tabbarII">
        <tabbar-item name="imemu1" icon="home">Memu1</tabbar-item>
        <tabbar-item name="imemu2" icon="cell">Memu2</tabbar-item>
        <tabbar-item name="imemu3" icon="list">Memu3</tabbar-item>
        <tabbar-item name="imemu4" icon="date">Memu3</tabbar-item>
      </tabbar>
    </panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Panel from '@/components/Panel.vue';
import Tabbar from '@/components/Tabbar.vue';
import TabbarItem from '@/components/TabbarItem.vue';

@Component({
  components: {
    Panel,
    Tabbar,
    TabbarItem,
  },
})
export default class DemoTabbar extends Vue {

  private tabbarI: string = 'memu1';

  private tabbarII: string = 'imemu1';
}
</script>