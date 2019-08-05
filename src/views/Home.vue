<template>
  <div class="home">
    <div class="home__body">
      <div class="home__header">
        <h1 class="home__title">ZILLION</h1>
        <h2 class="home__sub-title">Yet another Mobile UI Components of VueJs</h2>
      </div>
      <panel title="Basic" description="basic components" class="home__panel">
        <cell title="button" />
        <cell title="cell" />
        <cell title="flexbox" />
        <cell title="icon" />
      </panel>
      <panel title="Display" description="component for display data" class="home__panel">
        <cell title="panel" />
        <cell title="sticky" />
        <cell title="swiper" />
        <cell title="list" />
        <cell title="skeleton" />
        <cell title="loading" />
        <cell title="lazyload" />
        <cell title="coupon" />
      </panel>
      <panel title="Popups" description="poup, actionsheet, etc" class="home__panel">
        <cell title="popup" />
        <cell title="actionsheet" />
        <cell title="dialog" />
      </panel>
      <panel title="Form" description="form items" class="home__panel">
        <cell title="input" />
        <cell title="textarea" />
        <cell title="upload" />
        <cell title="switch" />
        <cell title="datepicker" />
        <cell title="slider" />
        <cell title="address" />
      </panel>
      <panel title="Navigation">
        <cell title="tab" />
        <cell title="tabbar" />
        <cell title="search" />
        <cell title="autocomplete" />
        <cell title="header" />
      </panel>
    </div>
    <tabbar class="home__footer" v-model="tab">
      <tabbar-item name="home">Home</tabbar-item>
      <tabbar-item name="demo">Demo</tabbar-item>
    </tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabbar from '@/components/tabbar.vue';
import TabbarItem from '@/components/tabbar-item.vue';
import Panel from '@/components/panel.vue';
import Cell from '@/components/cell.vue';

@Component({
  components: {
    Tabbar,
    TabbarItem,
    Panel,
    Cell,
  },
})
export default class Home extends Vue {
  private tab: string = 'home';
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
}
.home__header {
  padding: 16px;
  box-sizing: border-box;
}
.home__title {
  padding: 0;
  margin: 0;
}
.home__panel {
  margin-bottom: 16px;
}
.home__body {
  flex: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  background: #f8f8f8;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.home__sub-title {
  color: #7d7e80;
  font-size: 14px;
  margin: 0;
}
</style>

