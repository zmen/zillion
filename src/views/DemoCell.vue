<template>
  <div class="demo-cell">
    <panel title="Panel with description" description="demo description">
      <cell title="cell title"/>
      <cell title="second cell title"/>
      <cell title="third cell title"/>
    </panel>
    <panel title="Panel without description">
      <cell title="cell title"/>
      <cell title="second cell title"/>
      <cell title="third cell title"/>
    </panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Panel from '@/components/Panel.vue';
import Cell from '@/components/Cell.vue';

@Component({
  components: {
    Cell,
    Panel,
  },
})
export default class DemoCell extends Vue {

}
</script>