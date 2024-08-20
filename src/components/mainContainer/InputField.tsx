import { useStore } from "@nanostores/react";
import { dollarPrice, inputValues, isDollarActive } from "src/store";

interface Props {
  title: string;
  indicator:  string;
  currencyIndicator: "$" | "Bs.S";
}

export const InputField = ({
  title,
  currencyIndicator,
  indicator
}: Props) => {

  const $paraleloPrice = useStore(dollarPrice)['paralelo']
  const paddingToAdd = currencyIndicator == '$' ? 'ps-8' : '!ps-16'
  const placeholder = currencyIndicator == '$' ? '1.00' : $paraleloPrice.toString()
  
  const onChangeInput = (e: any) => {
    if(indicator === 'dolar') {
      inputValues.set({ dolar: e.target.value, bolivares: null })
      isDollarActive.set(true);
      return;
    }
    inputValues.set({ bolivares: e.target.value, dolar: null })
    isDollarActive.set(false)
  };

  return (
    <div className="space-y-1">
      <span className="text-sm tracking-tight text-neutral-600 dark:text-neutral-400">{title}</span>
      <div className="relative">
        <label htmlFor={title} className="absolute text-xl inset-y-0 ps-4 flex items-center dark:text-neutral-100">{currencyIndicator}</label>
        <input
          min={0}
          onChange={onChangeInput}
          id={title}
          type="number"
          placeholder={placeholder}
          className={`flex text-xl ps-8 h-12 w-full rounded-md border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:border-zinc-400 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:transition-none ${paddingToAdd} dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:border-neutral-600`}
        />
      </div>
    </div>
  )

}