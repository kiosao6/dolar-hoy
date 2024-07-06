import { atom, map } from "nanostores";

export const dollarPrice = map({
  bcv: 0,
  paralelo: 0
})

export const activeCurrency = map({
  tasa: 'BCV',
});

export const lastUpdated = atom('')
export const totalPrice = atom(0);


// Fetch to get and update the prices
const DOLLAR_URL = 'https://pydolarvenezuela-api.vercel.app/api/v1/dollar'
const response = await fetch(DOLLAR_URL);
const data = await response.json();

dollarPrice.set({
  bcv: data.monitors.bcv.price || 0,
  paralelo: data.monitors.enparalelovzla.price || 0
})

lastUpdated.set(data.monitors.bcv.last_update)