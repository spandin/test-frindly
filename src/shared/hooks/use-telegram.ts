import WebApp from "@twa-dev/sdk"

export const useTelegram = () => {
  // Получение данных пользователя
  const getUserData = () => {
    return {
      id: WebApp.initDataUnsafe.user?.id,
      firstName: WebApp.initDataUnsafe.user?.first_name,
      lastName: WebApp.initDataUnsafe.user?.last_name,
      username: WebApp.initDataUnsafe.user?.username,
      languageCode: WebApp.initDataUnsafe.user?.language_code,
      startParam: WebApp.initDataUnsafe.start_param,
    }
  }

  const userData = getUserData()

  return {
    userData,
  }
}
