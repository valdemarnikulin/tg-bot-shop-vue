const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };
  const onToggleBtn = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user?.username,
    onToggleBtn,
  };
}
