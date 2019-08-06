<template>
  <div class="demo-button">
    <z-button type="default">DEFAULT</z-button>
    <z-button type="primary">PRIMARY</z-button>
    <z-button type="danger">DANGER</z-button>
    <z-button type="primary" :loading="true">LOADING...</z-button>
    <z-button type="primary" :loading="true"></z-button>
    <z-button type="danger" :round="true">ROUND</z-button>
    <z-button type="default" :round="true" size="large">LAEGE</z-button>
    <z-button type="primary" :round="true" size="large" :disabled="true">DISABLED</z-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ZButton from '@/components/Button.vue';

@Component({
  components: {
    ZButton,
  },
})
export default class DemoButton extends Vue {}
</script>

<style lang="scss" scoped>
.demo-button {
  padding: 16px;
  box-sizing: border-box;
}
.demo-button > * {
  display: block;
  margin-bottom: 6px;
}
</style>
