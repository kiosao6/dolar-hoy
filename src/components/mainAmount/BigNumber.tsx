
import { useStore } from '@nanostores/react'
import { activeCurrency, dollarPrice } from 'src/store'

export const BigNumber = () => {

  const $tasa = useStore(activeCurrency).tasa.toLowerCase();
  const $price = useStore(dollarPrice as any )[$tasa]

  return (
    <p>
      {$price}
    </p>
  )
}

