<template>
  <div id="app">
    <my-header></my-header>
    <button @click="toggleButton">toggle</button>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import { useTelegram } from "./helpers/useTelegram";
const { onToggleBtn, tg } = useTelegram();
export default {
  components: { MyHeader },
  name: "App",
  mounted() {
    tg.ready();
  },
  methods: {
    toggleButton() {
      onToggleBtn();
    },
  },
};
</script>

<style lang="scss">
#app {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
</style>
