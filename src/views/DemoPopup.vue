<template>
  <div class="demo-popup">
    <popup v-model="isShow">
      <div class="demo-popup__content">Content</div>
    </popup>
    <base-button @click.native="isShow = !isShow">SHOW</base-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Popup from '@/components/Popup.vue';
import BaseButton from '@/components/Button.vue';

@Component({
  components: {
    Popup,
    BaseButton,
  },
})
export default class DemoPopup extends Vue {
  private isShow: boolean = false;
}
</script>

<style lang="scss" scoped>

.demo-popup__content {
  color: #fff;
  background: #108ee9;
  padding: 32px;
}

</style>


