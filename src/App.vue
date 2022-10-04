<template>
  <div id="app">
    <my-header></my-header>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
export default {
  components: { MyHeader },
  name: "App",
};
</script>

<style lang="scss">
#app {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
</style>
