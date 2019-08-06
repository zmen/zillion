<template>
  <div class="demo">
    <div class="demo__header">
      <the-header :title="headerTitle"></the-header>
    </div>
    <router-view class="demo__body" v-if="isNested"></router-view>
    <div class="demo__body" v-else>
      <div class="demo__block">
        <h2 class="demo__title">basic component</h2>
        <grid :column="4">
          <grid-item text="button" icon="Buttons" @click.native="goto('/demo/button')" />
          <grid-item text="cell" icon="cell" />
          <grid-item text="flexbox" icon="stack" />
          <grid-item text="icon" icon="icon" @click.native="goto('/demo/icon')" />
        </grid>
      </div>
      <div class="demo__block">
        <h2 class="demo__title">display data</h2>
        <grid :column="4">
          <grid-item text="panel" icon="definedpanel" />
          <grid-item text="sticky" icon="stickynote" />
          <grid-item text="list" icon="list" />
          <grid-item text="loading" icon="Loading" />
          <grid-item text="lazyload" icon="image" />
          <grid-item text="swiper" />
          <grid-item text="skeleton" />
          <grid-item text="coupon" />
        </grid>
      </div>
      <div class="demo__block">
        <h2 class="demo__title">popup</h2>
        <grid :column="4">
          <grid-item text="popup" icon="popup" />
          <grid-item text="dialog" />
          <grid-item text="actionsheet" />
        </grid>
      </div>
      <div class="demo__block">
        <h2 class="demo__title">form</h2>
        <grid :column="4">
          <grid-item text="upload" icon="Cloudupload" />
          <grid-item text="datepicker" icon="date" />
          <grid-item text="address" icon="address" />
          <grid-item text="switch" />
          <grid-item text="slider" />
          <grid-item text="input" />
          <grid-item text="textarea" />
        </grid>
      </div>
      <div class="demo__block">
        <h2 class="demo__title">navigation</h2>
        <grid :column="4">
          <grid-item text="tab" />
          <grid-item text="tabbar" icon="tabbar" />
          <grid-item text="search" icon="search" />
          <grid-item text="header" icon="Header" />
        </grid>
      </div>
    </div>
    <tabbar class="demo__footer" v-model="tab">
      <tabbar-item name="home" icon="home" @click.native="$router.push('/')">Home</tabbar-item>
      <tabbar-item name="demo" icon="icon" @click.native="$router.push('/demo')">Demo</tabbar-item>
    </tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabbar from '@/components/Tabbar.vue';
import TabbarItem from '@/components/TabbarItem.vue';
import TheHeader from '@/components/Header.vue';
import Grid from '@/components/Grid.vue';
import GridItem from '@/components/GridItem.vue';

@Component({
  components: {
    Tabbar,
    TabbarItem,
    TheHeader,
    Grid,
    GridItem,
  },
})
export default class Home extends Vue {
  private tab: string = 'demo';

  private goto(routerName: string): void {
    this.$router.push(routerName);
  }

  private get isNested(): boolean {
    return this.$route.matched.length > 1;
  }

  private get headerTitle(): string|undefined {
    return this.$route.name;
  }
}
</script>

<style lang="scss" scoped>
.demo {
  height: 100%;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  &__body {
    flex: 1;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 100px;
  }
  &__title {
    font-size: 14px;
    line-height: 1.2;
    color: #9a9a9a;
    text-transform: uppercase;
    padding-left: 1em;
    box-sizing: border-box;
  }
}
</style>


