<template>
  <div class="demo-tab">
    <panel title="Common" description="common usage">
      <tab v-model="activeTabIndex">
        <tab-item>All</tab-item>
        <tab-item>Valid</tab-item>
        <tab-item>Expired</tab-item>
      </tab>
    </panel>

    <panel title="Scroll" description="overflow while child > 4">
      <tab v-model="activeTabIndex2">
        <tab-item>All</tab-item>
        <tab-item>Valid</tab-item>
        <tab-item>Expired</tab-item>
        <tab-item>Unknown</tab-item>
        <tab-item>Related</tab-item>
        <tab-item>Missed</tab-item>
      </tab>
    </panel>

    <panel title="CustomWidth" description="customize width of bottom bar">
      <tab v-model="activeTabIndex3" bar-width="40px">
        <tab-item>All</tab-item>
        <tab-item>Valid</tab-item>
        <tab-item>Expired</tab-item>
      </tab>
    </panel>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tab from '@/components/Tab.vue';
import TabItem from '@/components/TabItem.vue';
import Panel from '@/components/Panel.vue';

@Component({
  components: {
    Tab,
    TabItem,
    Panel,
  },
})
export default class DemoTab extends Vue {

  private activeTabIndex: number = 0;

  private activeTabIndex2: number = 0;

  private activeTabIndex3: number = 0;

}
</script>

<style lang="scss">
.demo-tab {
  &__title {
    padding-top: 16px;
    padding-left: 16px;
    font-size: 16px;
    text-transform: uppercase;
  }
}
</style>

