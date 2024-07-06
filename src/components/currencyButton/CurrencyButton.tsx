import { useStore } from "@nanostores/react";
import { vibrate } from "lib/vibrate";
import { activeCurrency } from "src/store";

interface Props {
  title: 'BCV' | 'Paralelo';
  amount: number;
}

export const CurrencyButton = ({
  title = 'BCV',
  amount
}: Props) => {

  const { tasa } = useStore(activeCurrency);
  const active = tasa === title ? "bg-white shadow !text-black" : '';

  const onHandleClick = () => {
    vibrate();
    activeCurrency.set( { tasa: title } )
  };

  return (
    <button
      onClick={ onHandleClick }
      className={`btn cursor-default px-3 py-2 rounded-md text-neutral-600 hover:bg-white hover:shadow hover:text-black transition-all flex items-center justify-between gap-4 ${active}`}
    >
      <span>
        {title}
      </span>
      <span className="font-semibold hidden lg:block">
        {`Bs.S ${amount}`}
      </span>
    </button>
  )
}
