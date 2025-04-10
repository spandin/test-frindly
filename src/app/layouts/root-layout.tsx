import { useTelegram } from "@/shared/hooks/use-telegram"

const RootLayout = () => {
  const { userData } = useTelegram()

  return <div>{userData.firstName}</div>
}
export default RootLayout
