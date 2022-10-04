<template>
  <div id="app">
    <button @click="onClose">close</button>
  </div>
</template>

<script>
const tg = window.Telegram.WebApp;
export default {
  name: "App",
  mounted() {
    tg.ready();
  },
  methods: {
    onClose() {
      tg.close();
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
