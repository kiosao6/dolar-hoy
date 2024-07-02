import { currencyFormat } from "lib/currencyFormater";
// import { getPrices } from "lib/getPrices";
import { useEffect } from "react";

interface Props {
  title: string;
  currencyIndicator: "$" | "Bs.S";
  placeholder: string;
  callback?: () => void;
}

export const InputField = ({
  title,
  currencyIndicator,
  placeholder,
  callback
}: Props) => {

  const paddingToAdd = currencyIndicator == '$' ? 'ps-8' : 'ps-16'

  useEffect(() => {
    console.log('hola')
  }, [])
  

  return (
    <div className="space-y-1">
      <label htmlFor="dollars" className="text-sm tracking-tight text-neutral-600">{title}</label>
      <div className="relative">
        <label className="absolute text-xl inset-y-0 ps-4 flex items-center">{currencyIndicator}</label>
        <input onChange={callback} id="dollars" type="number" placeholder={placeholder}
          className={`flex text-xl ps-8 h-12 w-full rounded-md border bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400 focus-visible:border-zinc-400 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:transition-none ${paddingToAdd}`}
        />
      </div>
    </div>
  )

}