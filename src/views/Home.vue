<template>
  <div class="home">
    <div class="home__body">
      <div class="home__header">
        <h1 class="home__title">ZILLION</h1>
        <h2 class="home__sub-title">Yet another Mobile UI Components of VueJs</h2>
      </div>

      <panel title="Complete" description="both components and demo are completed">
        <cell title="button" @click.native="$router.push('/demo/button')"><icon name="Buttons" /></cell>
        <cell title="cell" @click.native="$router.push('/demo/cell')"><icon name="cell" /></cell>
        <cell title="icon" @click.native="$router.push('/demo/icon')"><icon name="icon" /></cell>
        <cell title="indexed list" @click.native="$router.push('/demo/indexed')"><icon name="list" /></cell>
        <cell title="panel" @click.native="$router.push('/demo/cell')"><icon name="definedpanel" /></cell>
        <cell title="tab" @click.native="$router.push('/demo/tab')"><icon name="tabs" /></cell>
        <cell title="tabbar" @click.native="$router.push('/demo/tabbar')"><icon name="tabbar" /></cell>
      </panel>
      <panel title="Developing" description="neither components or demo is uncompleted">
        <cell title="header"><icon name="Header" /></cell>
        <cell title="popup"><icon name="popup" /></cell>
      </panel>
      <panel title="Pending" description="go go go">
        <cell title="actionsheet" />
        <cell title="address"><icon name="address" /></cell>
        <cell title="datepicker"><icon name="date" /></cell>
        <cell title="flexbox"><icon name="stack" /></cell>
        <cell title="loading"><icon name="Loading"/></cell>
        <cell title="search"><icon name="search" /></cell>
        <cell title="sticky"><icon name="stickynote" /></cell>
        <cell title="upload"><icon name="Cloudupload"/></cell>
        <cell title="coupon" />
        <cell title="dialog" />
        <cell title="input" />
        <cell title="skeleton" />
        <cell title="slider" />
        <cell title="swiper" />
        <cell title="switch" />
        <cell title="textarea" />
      </panel>

    </div>
    <tabbar class="home__footer" v-model="tab">
      <tabbar-item name="home" icon="home" @click.native="$router.push('/')">Home</tabbar-item>
      <tabbar-item name="demo" icon="icon" @click.native="$router.push('/demo')">Demo</tabbar-item>
    </tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabbar from '@/components/Tabbar.vue';
import TabbarItem from '@/components/TabbarItem.vue';
import Panel from '@/components/Panel.vue';
import Cell from '@/components/Cell.vue';
import Icon from '@/components/Icon.vue';

@Component({
  components: {
    Tabbar,
    TabbarItem,
    Panel,
    Icon,
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

