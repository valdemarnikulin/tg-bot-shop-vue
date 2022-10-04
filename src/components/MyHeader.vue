<template>
  <div class="header">
    <button @click="Close">close</button>
    <span class="user-name">{{ userLocals }}</span>
  </div>
</template>
<script>
import { useTelegram } from "../helpers/useTelegram";
const { tg, user, onClose } = useTelegram();
// const tg = window.Telegram.WebApp;

export default {
  data() {
    return {
      userLocals: user?.username,
      //   user: tg.initDataUnsafe?.user?.username,
    };
  },
  mounted() {
    tg.ready();
  },
  methods: {
    Close() {
      onClose();
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
