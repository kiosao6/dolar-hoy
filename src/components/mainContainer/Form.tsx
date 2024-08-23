import { InputField } from "./InputField"

export const Form = () => {
  return (
    <form className="space-y-4 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-10">
      <InputField title="Dólares" currencyIndicator="$" indicator="dolar"/>
      <InputField title="Bolívares" indicator="bolivar" currencyIndicator="Bs.S"/>
    </form>
  )
}