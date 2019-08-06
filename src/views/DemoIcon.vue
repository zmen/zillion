<template>
  <div class="demo-icon">
    <div class="demo-icon__body">
      <div class="demo-icon__block">
        <grid :column="3">
          <grid-item text="Buttons" icon="Buttons"></grid-item>
          <grid-item text="Cloudupload" icon="Cloudupload" />
          <grid-item text="Header" icon="Header" />
          <grid-item text="Loading" icon="Loading" />
          <grid-item text="address" icon="address" />
          <grid-item text="back" icon="back" />
          <grid-item text="cell" icon="cell" />
          <grid-item text="baseline-close-px" icon="baseline-close-px" />
          <grid-item text="contraction" icon="contraction" />
          <grid-item text="date" icon="date" />
          <grid-item text="definedpanel" icon="definedpanel" />
          <grid-item text="home" icon="home" />
          <grid-item text="icon" icon="icon" />
          <grid-item text="image" icon="image" />
          <grid-item text="list" icon="list" />
          <grid-item text="popup" icon="popup" />
          <grid-item text="search" icon="search" />
          <grid-item text="stack" icon="stack" />
          <grid-item text="stickynote" icon="stickynote" />
          <grid-item text="tabbar" icon="tabbar" />
        </grid>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Grid from '@/components/Grid.vue';
import GridItem from '@/components/GridItem.vue';
import Icon from '@/components/Icon.vue';

@Component({
  components: {
    Grid,
    GridItem,
    Icon,
  },
})
export default class DemoIcon extends Vue {

}
</script>
