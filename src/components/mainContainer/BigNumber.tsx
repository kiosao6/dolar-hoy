
import { useStore } from '@nanostores/react'
import { activeCurrency, dollarPrice, inputValues, isDollarActive } from 'src/store'

export const BigNumber = () => {
  const $isDollarActive = useStore(isDollarActive)
  const monedaActiva = $isDollarActive ? 'dolar' : 'bolivares'

  const $tasa = useStore(activeCurrency).tasa.toLowerCase();
  const $price = useStore(dollarPrice as any )[$tasa]
  const $inputValue = useStore(inputValues)[monedaActiva]
  const bolivarInput = useStore(inputValues)['bolivares']

  // If input value is 0, it shows the dollar's price
  const priceToShowIfDollarIsActive = $inputValue! <= 0 ? $price : ($price * $inputValue!).toFixed(2)
  const priceToShowIfBolivarIsActive = $inputValue! <= 0 ? $price : ($inputValue! / $price).toFixed(2)

  return (
    <p id='number' className='dark:text-neutral-100 text-center'>
      {
        (bolivarInput! <= 0 || bolivarInput! == undefined) ? 'Bs ' : '$ '
      }

      {
        ($isDollarActive || bolivarInput! <= 0 || bolivarInput! == undefined) ? priceToShowIfDollarIsActive : priceToShowIfBolivarIsActive
      }
    </p>
  )
}

