<template>
  <div class="header">
    <button @click="onClose">close</button>
    <span class="user-name">{{ user }}</span>
  </div>
</template>
<script>
const tg = window.Telegram.WebApp;

export default {
  data() {
    return {
      user: tg.initDataUnsafe?.user?.username,
    };
  },
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

<style>
.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.user-name {
  margin-left: auto;
}
</style>
