import WebApp from "@twa-dev/sdk"

// Инициализация Telegram WebApp
export const initTelegramWebApp = () => {
  // Инициализация WebApp
  WebApp.ready()

  // Настройка основной кнопки
  WebApp.MainButton.setText("Закрыть")
  WebApp.MainButton.show()

  // Настройка темы
  WebApp.setHeaderColor(WebApp.themeParams.bg_color || "#2481cc")
  WebApp.setBackgroundColor(WebApp.themeParams.bg_color || "#ffffff")

  return WebApp
}

export const isTelegramWebApp = () => {
  return Boolean(WebApp.platform)
}
