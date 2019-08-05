<template>
  <div class="zl-tabbar">
    <slot />
  </div>
</template>

<script>
// Did not use vue class component here
// as it's impossible to get component instance as provide in class-style
export default {
  name: 'Tabbar',
  props: ['value'],
  data()  {
    return {
      children: [],
    };
  },
  provide() {
    return {
      parent: this,
    };
  },
  methods: {
    setActive() {
      this.children.forEach((item) => {
        item.active = (item.name === this.value);
      });
    },
    onChange(value) {
     if (value !== this.value) {
       this.$emit('change', value);
       this.$emit('input', value);
     }
    },
  },
  watch: {
    value() {
      this.setActive();
    },
    children() {
      this.setActive();
    },
  },
};
</script>

<style lang="scss" scoped>
.zl-tabbar {
  height: 49px;
  width: 100%;
  display: flex;
  border-top: 1px solid #eee;
}
</style>



